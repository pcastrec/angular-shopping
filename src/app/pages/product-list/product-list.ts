import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ProductItem } from '../../components/product-item/product-item';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  imports: [ProductItem, FormField],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {

  private productService = inject(ProductService)
  products = computed(() => {
    const text = this.form.search().value().toLowerCase()
    return this.productService.products().filter(p => p.title.toLowerCase().includes(text))
  })

  formValues = signal({ search: '' })
  form = form(this.formValues, (field) => required(field.search))

  ngOnInit(): void {
    this.productService.getProducts().subscribe()
  }

  onSubmit(event: Event) {
    //   event.preventDefault()
    //   console.log(this.form.search().value())
    //   this.products = this.productService.filteredProducts(this.form.search().value())
  }
}
