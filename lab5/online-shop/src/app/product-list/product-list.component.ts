import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { Item, itemsList } from '../app-product-list/products';
import { Category } from '../product-item/categories';
import { deletedItemsId } from '../globals';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input() category !: Category
  // It is here cause these are one level above
  showShare: boolean = false;
  focusItem !: Item; // For sharing
  // ------------------------------------------
  filteredItems: Item[];
  deletedItemsId : number[];

  constructor(private cdr : ChangeDetectorRef) {
    // this.filteredItems = // Only if category exists and it is not undefined
    // this.category && (this.filteredItems = itemsList.filter((item) => item.id in this.category.items)); // put into this arrray only items that falls in this category
    this.filteredItems = itemsList; // by default it is while thing
    this.deletedItemsId = deletedItemsId;
  }

  ngOnChanges() {
    if (this.category) {
      this.filteredItems = itemsList.filter((item) => {
        // console.log(item.id in this.category.itemsId, item.id)
        return this.category.itemsId.includes(item.id) && !(this.deletedItemsId.includes(item.id));
      })

      console.log(this.category.itemsId)
    } else {
      this.filteredItems = itemsList;
    }
  }

  share = (product: Item) => {
    this.showShare = true;
    this.focusItem = product;

    console.log(this.showShare)
    console.log(product)

    this.cdr.detectChanges();
  }

  shareoff() {
    this.showShare = false;
    console.log(this.showShare)
  }


  onNotify(productName: string) {
    window.alert(`We will notify you when ${productName} will be on stock!`);
  }

}
