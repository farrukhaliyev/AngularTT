import { Component, Inject } from '@angular/core';
import { Book, BookService } from './services/BookService';
import { bookService } from './tokens/BookServiceInToken';
import { TestService } from './services/TestService';
import { RandomNumService } from './services/RandomNumService';

@Component({
  selector: 'app-root', //selector class referance
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Proj1';
  body: string = 'This is data binding example';

  //Dependency Injection with string token
  // constructor(@Inject("BookService") private bookService : BookService) 
  // {}

  //Dependency Injection with type token
  // constructor(private bookService : BookService) 
  // {}

  //Dependency Injection with injection token
  // constructor(@Inject(bookService) private bookService) 
  // {}

  //Value Provider
  // constructor(@Inject("hello") private message: string) 
  // {
  //   console.log(message);
  // }

  //Value Provider (Function)
  // constructor(@Inject("helloF") private func: Function) 
  // {
  //   console.log(func());
  // }

  //Value Provider (Factory)
  // constructor(@Inject("postService") private posts: Function) 
  // {
  //   console.log(posts);
  // }

  //useValue funksiyanin ozunu qaytarir, useFactory return de ne qayidir onu
  // constructor(
  //   @Inject("value") private value, 
  //   @Inject("factory") private factory)
  // {
  //   console.log(value);
  //   console.log(factory);
  // }

  // constructor(private testService: TestService)
  // {
  //     console.log(testService.getBooks());
  // }

  constructor(public randomNumService: RandomNumService){

  }

  // books: Book[] = this.bookService.getBooks();
}
