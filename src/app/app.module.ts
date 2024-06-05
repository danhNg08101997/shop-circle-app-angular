import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { OrderConfirmComponent } from './pages/order-confirm/order-confirm.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    ProductDetailComponent,
    ProductListComponent,
    OrderConfirmComponent,
    LoginComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    // HomeComponent,
    // ProductDetailComponent,
    // OrderComponent,
    // ProductListComponent,
    // OrderConfirmComponent,
    LoginComponent,

  ],
})
export class AppModule {}
