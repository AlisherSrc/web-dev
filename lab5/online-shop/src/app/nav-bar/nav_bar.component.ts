import { Component } from "@angular/core";

@Component(
  {
    selector:"nav-bar",
    templateUrl:"./nav_bar.component.html",
    styleUrls: ["./nav_bar.component.css"]
  }
)

export class NavBarComponent {
  title:string = "Alisher's Shop"
}
