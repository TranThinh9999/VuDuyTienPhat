import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailproductsComponent } from './detailproducts/detailproducts.component';
import { HienImageComponent } from './hien-image/hien-image.component';
import {WordComponent} from './word.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailproductsComponent,
    HienImageComponent,
    WordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
