import { Injectable } from '@angular/core';
import { Product } from 'src/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];
  
  constructor() { }

  addProductstoCart(product: any){
    this.products.push(product)
  }

  getProducts(){
    return this.products;
  }

  clearCart(){
    this.products = [];
  }
}
