import { Component } from "@angular/core";
// import {Item} from "./item-module.module";

export interface Item {
  id: number,
  name: string,
  description: string,
  cost: number,
  rating: number,
  images: string[],
  imagesNumber: number,
}


@Component(
  {
    selector: "app-products",
    templateUrl: "./app-product-list.component.html",
    styleUrls: ["./app-product-list.component.css"]
  }
)

export class AppProductListComponent {
  itemsList: Item[] = [
    {
      id: 1,
      name: "Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный",
      cost: 87411,
      imagesNumber: 1,
      images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h78/49613712195614/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-"], //{number of the image}.jpg
      description: "Технология NFC\n Цвет: черный \nТип экрана: PLS TFT LCD сенсорный, мультитач \nДиагональ: 6.6 дюйм \nРазмер оперативной памяти: 4 ГБ \nПроцессор: 8-ядерный Exynos 850 \nОбъем встроенной памяти: 128 ГБ Емкость аккумулятора: 5000 мАч",
      rating: 5
    }
  ]

  stars:number[] = [1,2,3,4,5]

  share(){
    console.log("sharing!")
  }
}
