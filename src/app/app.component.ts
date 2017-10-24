import { Component } from '@angular/core';
import { DATA } from './shared/mock-data';
import {Product} from "./shared/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // product-thumbnail

  products: Product[]

  constructor() {
    this.products = DATA
  }
}
