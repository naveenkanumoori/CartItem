import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
