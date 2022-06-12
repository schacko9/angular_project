import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../cart.service';
import { CartItemsComponent } from './cart-items.component';
import { MockCartService } from './MockCartService';


describe('CartItemsComponent', () => {
  
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;
  let cartService : CartService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsComponent ],
      providers :[{provide : CartService, useClass : MockCartService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsComponent);
    cartService = TestBed.inject(CartService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Cart Sum', () => {
    expect(component).toBeTruthy();
    expect(component.sum).toBe(16);
    component.onKey(cartService.getProducts()[1],2);
    fixture.detectChanges();
    expect(component.sum).toBe(25);
    const cart = fixture.nativeElement;
    expect(cart.querySelector(".total").textContent).toBe("34.99");
  });
  
});
