import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingpageDetailsComponent } from './landingpage-details.component';


describe('LandingpageDetailsComponent', () => {
  
  let component: LandingpageDetailsComponent;
  let fixture: ComponentFixture<LandingpageDetailsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Landing - SVC Library', () => {
    expect(component).toBeTruthy();
    const element = fixture.nativeElement;
    const p = element.querySelector("h1");
    expect(p.textContent).toEqual("SVC Library");
  });

  it('Landing - Browse',() => {
    expect(component).toBeTruthy();
    const element = fixture.nativeElement;
    const buttons = element.querySelectorAll("button");
    expect(buttons.length).toEqual(2);
    const button1 = buttons[0];
    const button2 = buttons[1];
    expect(button1.textContent).toEqual("Browse Books");
    expect(button2.textContent).toEqual("Browse Virtual Library");
  });
  
});
