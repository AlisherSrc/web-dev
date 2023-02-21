import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav_bar.component';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import { ShareComponent } from './share/share.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  // schemas:[
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  declarations: [
    AppComponent,
    NavBarComponent,
    AppProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ShareComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: AppProductListComponent},
      {path:'products/:productId',component: ProductDetailsComponent},
      {path:'cart',component: CartComponent},
      {path:'shipping',component:ShippingComponent}
    ]),
    ShareButtonsModule.withConfig({
      debug:true,
    }),
    ShareIconsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
