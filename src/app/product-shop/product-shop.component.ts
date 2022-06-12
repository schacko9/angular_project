import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})

export class ProductShopComponent implements OnInit {
  
  product: Product | undefined;
  disabledButton = false;
  text:string = "Add to Cart";
  submitted = false;
  
  constructor(private route:ActivatedRoute, private cart:CartService) {

   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const pid = Number(routeParams.get("productId"));
    this.product = products.find((product) => product.id === pid);
  }

  addtoCart() {
    this.disabledButton = true;
    this.text = "Added to Cart";
    this.submitted = true;
    this.cart.addProductstoCart(this.product);
  }
}
