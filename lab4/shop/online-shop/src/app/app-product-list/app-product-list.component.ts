import { Component, ChangeDetectorRef } from "@angular/core";
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


  constructor(private cdr:ChangeDetectorRef){}



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

  nextImg(item : Item){
    const updatedItemsList = this.itemsList.map(product => {
      if(item.id === product.id && product.imagesNumber < 3){
        return {...product,imagesNumber:product.imagesNumber + 1}
      }else{
        return product;
      }
    })
    this.itemsList = updatedItemsList;
  }

  prevImg(item : Item){
    const updatedItemsList = this.itemsList.map(product => {
      if(item.id === product.id && product.imagesNumber > 1){
        return {...product,imagesNumber:product.imagesNumber - 1}
      }else{
        return product;
      }
    })
    this.itemsList = updatedItemsList;
  }

}
