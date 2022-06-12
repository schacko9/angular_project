import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/products';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
  @Input() product!: Product;
  @Input() notVisible: any;

  @Output() notify = new EventEmitter<Product>();
  @Output() nnotify = new EventEmitter<Product>();


  constructor() { }

  ngOnInit(): void {
  }

  clickChildMe(){
    this.notify.emit(this.product);
  }

  nclickChildMe(){
    this.nnotify.emit(this.product);
  }
}
