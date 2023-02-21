import { Injectable } from '@angular/core';
import { Item } from './app-product-list/products';
import { HttpClient } from '@angular/common/http';

export interface Shipping {
  "symbol": string,
  "price": number,
  "timestamp": number
}



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCart: Item[] = [];
  constructor(private http: HttpClient) { }

  addToCart(product: Item) {
    this.itemsInCart.push(product);
  }

  getItems() {
    console.log(this.itemsInCart);
    return this.itemsInCart;
  }

  clearCart() {
    this.itemsInCart = [];
    return this.itemsInCart;
  }

  getShippingPrices() {
    const req = this.http.get<Shipping>('https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC', {
      headers: {
        'X-Api-Key': 'naxxvDEBZyQcXLKWdGCyxw==YHtw3e5x1bg6dH3p'
      }
    });


    // const req1 = this.http.get<{type:string,price:number}[]>('https://stackblitz.com/run?file=src%2Fassets%2Fshipping.json');

    return req;
  }
}
