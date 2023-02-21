import { Component, Input } from '@angular/core';
import { Item } from '../app-product-list/products';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  @Input() item!:Item;

  constructor(){

  }
}
