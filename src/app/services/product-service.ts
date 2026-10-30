import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { catchError, finalize, Observable, of, tap } from 'rxjs';

export interface Product {
    title: string,
    category: string,
    price: number,
    images: string[]
}

@Service()
export class ProductService {

    private http = inject(HttpClient)
    private url = "https://dummyjson.com/products"

    private _loading = signal<boolean>(false)
    loading = this._loading.asReadonly()

    private _products = signal<Product[]>([])
    products = this._products.asReadonly()

    getProducts(): Observable<Product[]> | Observable<unknown> {
        this._loading.set(true)
        return this.http.get<{ products: Product[] }>(this.url)
            .pipe(
                tap(res => this._products.set(res.products)),
                catchError(err => {
                    console.log(err)
                    return of(null)
                }),
                finalize(() => this._loading.set(false))
            )
    }
}