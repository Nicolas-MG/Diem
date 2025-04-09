import { Component, inject, signal, SimpleChanges, input } from '@angular/core';
import { Product } from '@shared/models/product.model';

import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component'
import { RouterLinkWithHref } from '@angular/router';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';

@Component({
  selector: 'app-list',
  imports: [ ProductComponent, RouterLinkWithHref, CommonModule, ProductDetailComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  selectedProduct: Product | null = null;
  showModal: boolean = false;

  products = signal<Product[]>([]);
  category = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  readonly category_id = input<string>();


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
    this.productService.getProducts(this.category_id())
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
    this.cartService.addToCart(product);
  }

  openModal(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.selectedProduct = null;
    this.showModal = false;
  }

}
