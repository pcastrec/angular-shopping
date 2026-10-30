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
  submitted = signal({ search: '', category: '' })

  products = computed(() => {
    const text = this.submitted().search.toLowerCase()
    return this.productService.products()
      .filter(p => {
        const matchText = p.title.toLowerCase().includes(text)
        let matchCategory = true
        if (this.submitted().category) {
          matchCategory = p.category === this.submitted().category
        }
        return matchText && matchCategory
      })
  })

  formValues = signal({ search: '', category: '' })
  form = form(this.formValues)

  ngOnInit(): void {
    this.productService.getProducts().subscribe()
  }

  onSubmit(event: Event) {
    event.preventDefault()
    this.submitted.set(this.form().value())
  }
}
