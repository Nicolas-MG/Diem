import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';

import { RouterLinkWithHref } from '@angular/router';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  imports: [
    ProductComponent,
    RouterLinkWithHref
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  
  products = signal<Product[]>([]);
  category = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input() category_id?: string;


  ngOnInit(){
    this.getProducts();
    this.getCategory(); 
  }


  ngOnChanges(changes: SimpleChanges){
    const category_id = changes['category_id'];
    if(category_id){
       this.getProducts()
    }
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (product) => {
        this.products.set(product);
      },
      error: () =>{
        alert("No se trajo ningun producto");
      }
    })
  }

  private getCategory(){
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.category.set(data);
      },
      error: () =>{
        alert("No trajo ninguna Categoria");
      }
    })
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
