import { Component } from '@angular/core';
import { BookService } from './demolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day1app';
  books;
  constructor(srv : BookService){
    
    this.books = srv.getBooks();
  }
}
