import { Component } from "@angular/core";
// import {Item} from "./item-module.module";
import { itemsList, Item } from "./products";

@Component(
  {
    selector: "app-products",
    templateUrl: "./app-product-list.component.html",
    styleUrls: ["./app-product-list.component.css"]
  }
)


export class AppProductListComponent {
  itemsList :Item[] = itemsList;
  showShare :boolean = false;
  focusItem !:Item; // For sharing

  stars:number[] = [1,2,3,4,5]

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
