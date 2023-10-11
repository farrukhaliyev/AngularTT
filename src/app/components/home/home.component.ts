import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RandomNumService } from 'src/app/services/RandomNumService';

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

export class HomeComponent implements OnInit, OnChanges, DoCheck {
    content: string = "kicik herfler";
    names : string[] = ["apple", "banana", "grape", "orange"];
    @Input() name: number;
    @Input() surname: number;
    visibility : boolean = false;
    num: number = 1;
    className: string = "myClass"

    constructor(public randomNumService: RandomNumService){

    }
  


    ngOnChanges(changes: SimpleChanges): void {
      // console.log("1. ngOnchanges")
    }

    ngOnInit(): void {
      // console.log("2. Component Initialized")
    }

    ngDoCheck(): void {
      // console.log("3. docheck");
    }
}
