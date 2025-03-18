import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [ CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  hideSideMenu = signal(true);
  @Input( { required: true } ) cart: Product[] = [];

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  };

  calcTotal(){
    return this.cart.reduce((total, product) => total + product.price, 0); 
  }

}
