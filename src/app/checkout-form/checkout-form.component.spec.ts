import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/Contacts';
import { CheckoutFormComponent } from './checkout-form.component';


describe('CheckoutFormComponent', () => {
  
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;
  const formData: Contact = {
    firstName:"Slomo",
    lastName:"Chacko",
    email:"slomochacko0@gmail.com",
    password:"123456"
  };
  

  beforeEach(fakeAsync( () => {
    TestBed.configureTestingModule({
     imports : [FormsModule],
     declarations: [ CheckoutFormComponent ]
   })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('Checkout Form', () => {
    expect(component).toBeTruthy();
    expect(component.submitted).toBe(false);
    component.submit(formData);
    fixture.detectChanges();
    expect(component.submitted).toBe(true);

    const formHtml = fixture.nativeElement.querySelector(".mycontainer");
    expect(formHtml.hidden).toEqual(true);
    component.submitted = false;
    fixture.detectChanges();
    expect(formHtml.hidden).toEqual(false);
 });


  it('User Input Field', fakeAsync(() => {
    const email = fixture.nativeElement.querySelector("#exampleInputEmail1");
    email.value = 'testing@gmail.com';
    email.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();
    const message = fixture.nativeElement.querySelector("p");
    expect(message.textContent).toMatch("testing@gmail.com");
  }));

});

