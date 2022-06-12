import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CartService } from '../cart.service';

import { ProductShopComponent } from './product-shop.component';

describe('ProductShopComponent', () => {
  let component: ProductShopComponent;
  let fixture: ComponentFixture<ProductShopComponent>;

  beforeEach(async () => {
    const CartServiceSpy = jasmine.createSpyObj('CartService',['addProductstoCart']);
    const ActivatedRouteSpy = jasmine.createSpyObj('ActivatedRoute',['snapshot']);
    const RouterSpy = jasmine.createSpyObj('Router', ['navigate'])
    ActivatedRouteSpy.snapshot.and.returnValues(new ActivatedRouteSnapshot)

    await TestBed.configureTestingModule({
      declarations: [ ProductShopComponent ],
      providers: [{provide: CartService, useValue: CartServiceSpy},
                  {provide: ActivatedRoute, useValue: ActivatedRouteSpy}, 
                  {provide: Router, useValue: RouterSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const element = fixture.nativeElement;

    const buttons = element.querySelectorAll("buttons");
    expect(buttons.length).toBe(3);
    const b1 = buttons[0];
    const b2 = buttons[1];
    const b3 = buttons[2];
    expect(b1.textContent).toMatch("Add");
    expect(b2.textContent).toEqual("Go to Checkout");
    expect(b3.textContent).toEqual("Continue Shopping");
  });
  
});
