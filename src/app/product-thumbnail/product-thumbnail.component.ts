import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/product.model";

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() product: Product

  detailViewActive: boolean

  constructor() {

  }

  ngOnInit() {
    this.detailViewActive = false
  }

  onProductClick(){
    this.detailViewActive = !this.detailViewActive
  }

  onAddToCart(){
    //this.cartService.addProductToCart(this.product)
  }
}
