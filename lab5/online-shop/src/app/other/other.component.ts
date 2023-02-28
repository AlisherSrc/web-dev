import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {
  otherShow : boolean;
  @Output() delete = new EventEmitter();

  constructor(){
    this.otherShow = false;
  }

  toggleOtherShow = () => {
    this.otherShow = !this.otherShow;
  }


}
