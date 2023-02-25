import { Component} from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../app-product-list/products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {


  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,

  ) {

  }
  cartItems : Item[] = this.cartService.getItems();

  onSubmit(): void{
    //Checkout of data is here
    this.cartItems = this.cartService.clearCart();
    console.warn("Your order has been submited!",this.checkoutForm.value);
    // Why are there cart items as well?
    this.checkoutForm.reset();
  }
}
