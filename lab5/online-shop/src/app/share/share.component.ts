import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Item } from '../app-product-list/products';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  @Input() item!:Item;
  @Output() exit = new EventEmitter();

  constructor(){

  }
}
