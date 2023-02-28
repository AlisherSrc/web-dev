import { Component, ChangeDetectorRef, Input, OnChanges, SimpleChanges} from "@angular/core";
import { Item } from '../app-product-list/products';
import { Category } from "./categories";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent{

  @Input() share !: (item : Item) => void;
  @Input() onNotify !: (itemName : string) => void;
  @Input() category !: Category;
// Here goes our defined(filtered) itemsList
  @Input() itemsList !: Item[];

  stars:number[] = [1,2,3,4,5]
  likeCounter : number;

  constructor(private cdr:ChangeDetectorRef){
    this.likeCounter = 0;
  }

  incLikes = (itemId : number) => {
    const updatedItemsList = this.itemsList.map((product) => {
      if(itemId === product.id){
        return {...product, likes: product.likes + 1}
      }else{
        return product;
      }
    })
    this.itemsList = updatedItemsList;
  }

  deleteItem = (itemId : number) => {
    const updatedItemsList = this.itemsList.filter((product) => product.id != itemId)

    this.itemsList = updatedItemsList;
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

