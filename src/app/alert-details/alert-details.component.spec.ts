import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/products';
import { AlertDetailsComponent } from './alert-details.component';


describe('AlertDetailsComponent', () => {

  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  const stubProduct : Product =
  {
    id: 1,
    name: 'Selenium',
    price: 7.99,
    quantity: 2,
    status: 'in Stock',
    description: "We will learn about Java Concepts, Selenium Webdriver, TestNG/Junit, Advanced Reporting, Logging with Log4J, Page Object Model, Page Factory Framework, Data-Driven/Keyword-Driven/Hybrid Frameworks, Maven, and Jenkins. ",
    imgaddress : "https://camo.githubusercontent.com/4b95df4d6ca7a01afc25d27159804dc5a7d0df41d8131aaf50c9f84847dfda21/68747470733a2f2f73656c656e69756d2e6465762f696d616765732f73656c656e69756d5f6c6f676f5f7371756172655f677265656e2e706e67"
  };

  const stubProduct2 : Product =
  {
    id: 3,
    name: 'Dev-Ops',
    price: 9.99,
    quantity: 0,
    status: '4 left',
    description: "We will learn about implementing Continuous Integration & Continous Delivery for any project. How to set up an AWS EC2 instances. Integrating Docker, Ansible and Kubertnetes to make the process faster and scalable.",
    imgaddress : "https://dt-cdn.net/wp-content/uploads/2021/07/13429_ILL_DevOpsLoop.png"
  };
  


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    component.product = stubProduct2;
    fixture.detectChanges();
  });


  it('Verifying Paragraph - Length', () => {
    const element2 = fixture.nativeElement;
    const p2 = element2.querySelectorAll("p")
    expect(p2.length).toEqual(2);
  });

  it('Verifying Paragraph - Text', () => {
    const element = fixture.nativeElement;
    const p = element.querySelectorAll("p")
    const p1 = p[0]
    const p2 = p[1]
    expect(p1.textContent).toEqual("Product is not avalible")
    expect(p2.textContent).toEqual("Please check back in a few days.")
  });

  it('Verifying Paragraph - Emit', () => {
    component.product =stubProduct;
    fixture.detectChanges();
    let selectedproduct!: Product;
    component.notify.subscribe((product)=>selectedproduct = product);
    component.clickChildMe();
    expect(selectedproduct).toEqual(stubProduct);
    //expect(selectedproduct).toEqual(stubProduct2);
  });

});
