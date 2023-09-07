import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector class referance
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Proj1';
  body: string = 'This is data binding example';
}
