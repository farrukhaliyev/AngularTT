import { Component, Input } from '@angular/core';

//Component decoratoru ile isharelenib ki bu classin component oldugunu bildirsin
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// export class HomeComponent {
//     @Input() name: number;
//     @Input() surname: number;
// }

export class HomeComponent {
    content: string = "kicik herfler";
    names : string[] = ["apple", "banana", "grape", "orange"];
    @Input() name: number;
    @Input() surname: number;
    visibility : boolean = false;
    num: number = 1;
    className: string = "myClass"
}
