import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestDirective } from './directives/TestExample/test.directive';
import { CustomIfDirective } from './directives/CustomIf/custom-if.directive';
import { CustomForDirective } from './directives/CustomFor/custom-for.directive';
import { KatanaPipe } from './pipes/katana.pipe';
import { FormComponent } from './components/form/form.component';
import { BookService } from './services/BookService';
import { bookService } from './tokens/BookServiceInToken';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestService } from './services/TestService';
import { RandomNumService } from './services/RandomNumService';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestDirective,
    CustomIfDirective,
    CustomForDirective,
    KatanaPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService, // { provide : BookService, useClass: BookService } same thing
    // {provide: "BookService", useClass: BookService},
    // {provide: bookService, useClass: BookService},

    // {provide: "hello", useValue: "hello angular"},
    // {provide: "helloF", useValue: () => {
    //   return "hello angularetto"; 
    // }},



    // {provide: "postService", useFactory: (httpClient: HttpClient) => {

    //   const data = httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe({ next: data => console.log(data) });

    //   return new BookService();
      
    // }, deps: [HttpClient]}



    // { provide: "value", useValue: () => "value geldi" },
    // { provide: "factory", useFactory: () => "factory geldi" }

    
    { provide: TestService, useExisting: BookService},
    RandomNumService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
