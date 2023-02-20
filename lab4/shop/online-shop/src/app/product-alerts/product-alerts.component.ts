import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from './../app-product-list/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!:Item;
  @Output() notify = new EventEmitter();


}
