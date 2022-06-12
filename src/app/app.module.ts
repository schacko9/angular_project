import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { LandingpageDetailsComponent } from './landingpage-details/landingpage-details.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibraryDashboardComponent } from './library-dashboard/library-dashboard.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AlertDetailsComponent,
    ProductShopComponent,
    LandingpageDetailsComponent,
    CartItemsComponent,
    CheckoutFormComponent,
    LibraryDashboardComponent,
    PriceDetailsComponent,
    ContactPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
