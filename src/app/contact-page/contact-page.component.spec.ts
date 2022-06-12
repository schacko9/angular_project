import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
  
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;
  const formData = {
    name:"Slomo Chacko",
    email:"slomochacko0@gmail.com",
    message:"Hello, there I would like to know how I can track my order?"
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [FormsModule],
      declarations: [ ContactPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Contact - Address', () => {
    expect(component).toBeTruthy();
    const element = fixture.nativeElement;
    const p = element.querySelector(".address");
    expect(p.textContent).toMatch("Email:");
    expect(p.textContent).toMatch("Phone:");

  });

  it('Contact - Thank You', () => {
    expect(component).toBeTruthy();
    expect(component.submitted).toBe(false);
    component.submit(formData);
    expect(component.submitted).toBe(true);

    const thankHtml = fixture.nativeElement.querySelector(".thankyou1");
    expect(thankHtml.hidden).toBe(true);
    const thank = fixture.nativeElement.querySelector(".thank");
    expect(thank.textContent).toMatch("Thank You");
  });

});
