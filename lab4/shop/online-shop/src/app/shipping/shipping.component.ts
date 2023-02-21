import { Component,OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartService } from '../cart.service';
import { Shipping } from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{
  shippingCosts!: Observable<Shipping>;
  shippingCostsArray: Shipping[] = [];

  constructor(
    private cartService:CartService
  ){}

  ngOnInit(): void {
      this.shippingCosts = this.cartService.getShippingPrices();
      this.shippingCosts.forEach(async(item) => {
        this.shippingCostsArray.push(item);
      })
  }

  returnRounded(num : number) : string {
    return Number(num).toFixed(1);
  }
}
