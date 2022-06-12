import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';


describe('ProductDetailsComponent', () => {
  
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Verifying Enable Buying Method', () => {
    expect(component).toBeTruthy();
    expect(component.notVisible).toBe(true);
    component.enableBuying();
    expect(component.notVisible).toBe(false);

  });

  it('Verifying Title of Product-details', () => {
   const element = fixture.nativeElement;
   const header = element.querySelector("h1");
   
   expect(header.textContent).toEqual("Avaliable Book's");
  });
  
});
