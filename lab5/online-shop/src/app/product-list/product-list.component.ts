import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { Item, itemsList } from '../app-product-list/products';
import { Category } from '../product-item/categories';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input() category !: Category
  // It is here cause these are one level above
  showShare: boolean = false;
  focusItem : Item; // For sharing
  // ------------------------------------------
  filteredItems: Item[];

  constructor(private cdr : ChangeDetectorRef) {
    // this.filteredItems = // Only if category exists and it is not undefined
    // this.category && (this.filteredItems = itemsList.filter((item) => item.id in this.category.items)); // put into this arrray only items that falls in this category
    this.filteredItems = itemsList; // by default it is while thing
    this.focusItem = {
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

  ngOnChanges() {
    if (this.category) {
      this.filteredItems = itemsList.filter((item) => item.id in this.category.itemsId)
      console.log(this.filteredItems)
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
