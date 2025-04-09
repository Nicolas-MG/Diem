import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [ CommonModule  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() openProduct = new EventEmitter<Product>();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
  
  openModal(product: Product) {
    this.openProduct.emit(product);
  }
  
}
