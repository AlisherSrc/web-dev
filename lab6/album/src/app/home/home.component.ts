import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  scrollImages : string[];
  svgFile: string;
  constructor(private sanitizer:DomSanitizer){
    this.scrollImages = [
      "https://cdn.pixabay.com/photo/2016/04/27/20/38/girl-1357485_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg",
      "https://cdn.pixabay.com/photo/2021/07/18/14/59/family-6475821_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/02/14/22/12/birds-7790506_1280.jpg",
      "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg"
    ];
    this.svgFile = '../../assets/right-arrow-3.svg';

  }

  getSafeUrl(filePath:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(filePath);
  }
}
