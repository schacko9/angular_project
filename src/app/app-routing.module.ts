import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LandingpageDetailsComponent } from './landingpage-details/landingpage-details.component';
import { LibraryDashboardComponent } from './library-dashboard/library-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';

const routes: Routes = [
  {path:"", component:LandingpageDetailsComponent},
  {path:"products", component:ProductDetailsComponent},
  {path:"products/:productId", component:ProductShopComponent},
  {path:"ebooks", component:LibraryDashboardComponent},
  {path:"cart", component:CartItemsComponent},
  {path:"checkout", component:CheckoutFormComponent},
  {path:"contactus", component:ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
