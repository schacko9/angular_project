import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LibraryService } from '../library.service';
import { LibraryDashboardComponent } from './library-dashboard.component';


describe('LibraryDashboardComponent', () => {
  
  let component: LibraryDashboardComponent;
  let fixture: ComponentFixture<LibraryDashboardComponent>;
  let getBookDetails: any;
  let book : any= [{
    "book_name": "Learn Anything Automation with Java",
    "isbn": "bcz888edede",
    "aisle": "20027"
}];


  beforeEach(async () => {
    const libraryService = jasmine.createSpyObj('LibraryService', ['getBookDetails'])
    getBookDetails = libraryService.getBookDetails.and.returnValue(of(book))
    
    await TestBed.configureTestingModule({
      declarations: [ LibraryDashboardComponent ],
      providers : [{provide:LibraryService, useValue:libraryService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDashboardComponent);
    TestBed.inject(LibraryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Library - GetBookDetails', () => {
    expect(component).toBeTruthy();
    const library = fixture.nativeElement;
    expect(getBookDetails.calls.any()).toBe(true); 
    expect(library.querySelectorAll("tr").length).toBe(2);
  });
    
});
