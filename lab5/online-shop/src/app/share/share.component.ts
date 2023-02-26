import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Item } from '../app-product-list/products';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  @Input() item:Item;
  @Output() exit = new EventEmitter();

  constructor(){
    this.item = {
      id:0,
      name:"default name",
      cost:-1,
      rating:-1,
      description:"def. desc.",
      images: [],
      imagesNumber:-1,
      url:"def.url"
    }
  }
}
