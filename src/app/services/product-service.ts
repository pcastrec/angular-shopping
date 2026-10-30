import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { catchError, finalize, forkJoin, Observable, of, tap } from 'rxjs';

export interface Product {
    title: string,
    category: string,
    price: number,
    images: string[]
}

@Service()
export class ProductService {

    private http = inject(HttpClient)
    private url = "https://dummyjson.com/products/"

    private _loading = signal<boolean>(false)
    loading = this._loading.asReadonly()

    private _products = signal<Product[]>([])
    products = this._products.asReadonly()

    private _categories = signal<string[]>([])
    categories = this._categories.asReadonly()

    getProducts(): Observable<Product[]> | Observable<unknown> {
        this._loading.set(true)
        return forkJoin({
            products: this.http.get<{ products: Product[] }>(this.url),
            categories: this.http.get<string[]>(this.url + "category-list")
        }).pipe(
            tap(res => {
                this._products.set(res.products.products)
                this._categories.set(res.categories)
            }),
            catchError((err: HttpErrorResponse) => of(err)),
            finalize(() => this._loading.set(false))
        )
    }
}