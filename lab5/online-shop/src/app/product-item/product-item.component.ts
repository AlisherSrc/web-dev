import { Component, ChangeDetectorRef, Input} from "@angular/core";
import { itemsList,Item } from '../app-product-list/products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() share !: (item : Item) => void;
  @Input() onNotify !: (itemName : string) => void;

  itemsList :Item[] = itemsList;

  stars:number[] = [1,2,3,4,5]

  constructor(private cdr:ChangeDetectorRef){}

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

