import { Component } from "@angular/core";
// import {Item} from "./item-module.module";

interface Item{
  name : string,
  image : string,
  description : string,
  cost:number,
  rating : number
}


@Component(
  {
    selector: "app-products",
    templateUrl:"./app-product-list.component.html",
    styleUrls: ["./app-product-list.component.css"]
  }
)

export class AppProductListComponent{
  itemsList : Item[] = [
    {
      name:"Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный",
      cost:87411,
      image:"link1",
      description:"Технология NFC: Цвет: черный Тип экрана: PLS TFT LCD сенсорный, мультитач Диагональ: 6.6 дюйм Размер оперативной памяти: 4 ГБ Процессор: 8-ядерный Exynos 850 Объем встроенной памяти: 128 ГБ Емкость аккумулятора: 5000 мАч",
      rating:5
    }
  ]
}
