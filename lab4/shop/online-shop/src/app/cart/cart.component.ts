import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../app-product-list/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    private cartService: CartService
  ) {

  }
  cartItems : Item[] = this.cartService.getItems();

}
