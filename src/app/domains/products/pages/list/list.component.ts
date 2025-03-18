import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  imports: [ CommonModule, 
             ProductComponent,
             HeaderComponent
            ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);


  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 1000,
        img: 'https://picsum.photos/340/340?r=20',
        creationAy: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 2000,
        img: 'https://picsum.photos/340/340?r=250',
        creationAy: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 5000,
        img: 'https://picsum.photos/340/340?r=207',
        creationAy: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }


  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
