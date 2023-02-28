import { Component } from '@angular/core';
import { itemsList,Item } from '../app-product-list/products';
import { categories,Category } from '../product-item/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  itemsList:Item[];
  categories:Category[];
  category!:Category;

  constructor(){
    this.itemsList = itemsList;
    this.categories= categories;
  }

  setCategory(category : Category){
    this.category = category;
  }



}
