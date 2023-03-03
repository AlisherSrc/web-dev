import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  scrollImages : string[];

  constructor(){
    this.scrollImages = [
      "https://cdn.pixabay.com/photo/2016/04/27/20/38/girl-1357485_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg",
      "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/02/14/22/12/birds-7790506_1280.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg"
    ]
  }
}
