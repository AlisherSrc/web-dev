import { Component } from '@angular/core';
import { Item } from '../app-product-list/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // It is here cause these are one level above
  showShare :boolean = false;
  focusItem !:Item; // For sharing
  // ------------------------------------------

  share(product: Item){
    console.log("sharing!");
    this.showShare = true;
    this.focusItem = product;
  }
  shareoff(){
    this.showShare = false;
  }


  onNotify(productName : string){
    window.alert(`We will notify you when ${productName} will be on stock!`);
  }

}
