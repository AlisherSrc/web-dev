import { Component, Input } from '@angular/core';
import {Item} from './../app-product-list/app-product-list.component';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!:Item; // what is !:
}
