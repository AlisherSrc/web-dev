import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav_bar.component';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { RouterModule } from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppProductListComponent},
      {path: 'items/:productId', component: ProductDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
