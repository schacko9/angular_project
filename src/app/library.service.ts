import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from 'src/Book-Details';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  url = "http://216.10.245.166//Library/GetBook.php?AuthorName=Shetty1";

  constructor(private http:HttpClient) {}

  getBookDetails():Observable<BookDetails[]>{
    return this.http.get<BookDetails[]>(this.url);
  }
}
