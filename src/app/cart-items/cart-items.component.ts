import { Component, OnInit } from '@angular/core';
import { Product } from 'src/products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})

export class CartItemsComponent implements OnInit {
 
  products = this.cart.getProducts();
  sum!: number;
  shippingPrice = 9.99;
  totalPrice! :number;
  submitted:boolean = false;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.updateSum();
  }

  
  updateSum()
  {
    this.sum = 0;
    for(const element of this.products)
    {
     this.sum = this.sum +element.price;
    }
    
    this.totalPrice = this.sum + this.shippingPrice;
  }

  onKey(product:any, quantity:number)
  {
      const newPrice = product.price * quantity;
      this.sum = this.sum - product.price + newPrice;
      this.totalPrice = this.sum + this.shippingPrice;
  }   

  deleteProduct(product: Product)
  {
    let arr=this.products;
    const index =this.products.indexOf(product);
    arr.splice(index,1);
    this.products = arr;
    this.updateSum();
  }
  
  number(quantity:HTMLInputElement){
    return Number(quantity.value)
  }

  submit(){
    this.submitted = true;
  }
}
