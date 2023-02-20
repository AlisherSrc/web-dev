import { Injectable } from '@angular/core';
import { Item } from './app-product-list/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCart : Item[] = [];
  constructor(private http:HttpClient) { }

  addToCart(product : Item){
    this.itemsInCart.push(product);
  }

  getItems(){
    console.log(this.itemsInCart);
    return this.itemsInCart;
  }

  clearCart(){
    this.itemsInCart = [];
    return this.itemsInCart;
  }

  getShippingPrices(){
    return this.http.get<{type:string,price:number}[]>('/assets/shipping.json');
  }
}
