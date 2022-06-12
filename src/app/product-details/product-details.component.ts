import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  
  products:Product[] = products;
  notVisible:boolean = true;
  
  constructor() {}

  ngOnInit(): void {}

  clickMe(product:Product){
    window.alert(product.name + " Course is avaliable for purchase")
  }

  nclickMe(product:Product){
    window.alert(product.name + " NOT Avaliable")
  }

  enableBuying(){
    this.notVisible = !this.notVisible;
  }
  
}
