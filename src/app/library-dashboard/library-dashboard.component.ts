import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/Book-Details';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrls: ['./library-dashboard.component.css']
})
export class LibraryDashboardComponent implements OnInit {

  bookDetails!: BookDetails[];
  
  constructor(private lib:LibraryService) { }

  ngOnInit(): void {
    this.lib.getBookDetails().subscribe(data=> this.bookDetails = data);
  }

}
