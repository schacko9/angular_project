import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/products';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {
  @Input() product!: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
