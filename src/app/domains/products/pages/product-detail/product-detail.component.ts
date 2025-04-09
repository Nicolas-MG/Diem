import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  
  @Input()product?: Product | null = null;
  currentCover: string = '';
  
  private productService = inject(ProductService);
  private cartService = inject(CartService)

  ngOnChanges() {
    if (this.product?.images?.length) {
      this.currentCover = this.product.images[0];
    }
  }

  cover(): string {
    return this.currentCover;
  }
  
  chengeCover(img: string){
    this.currentCover = img;
  }

  addToCart(){
    const product = this.product;
    if(product){
      this.cartService.addToCart(product)
    }
  }

}
