import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

declare var $: any;

//@Directive decoratoru ile isharelenib ki bu classin directive oldugunu bildirsin
@Directive({
  selector: '[appTest]' //[] moterizeler arasinda olarsa AttributeReferans adlanir. 
                        // HTML elementine attribute kimi elabve edilir
})

// @Directive({
//   selector: '.appTest' //'.' evvelinde noqte olarsa ClassReferans adlanir. 
//                         // HTML elementine class daxilinde elabve edilir
// })

export class TestDirective implements OnInit
{
  @Input() Color: string;

  constructor(private element: ElementRef) 
  {
  }

  //OnInit interfacesinden gelen metoddur, directivin constructoru ishleyib bittikden sonra ilk ishe dushen metoddur.
  ngOnInit(): void 
  {
    this.element.nativeElement.style.backgroundColor= this.Color;

    $(this.element.nativeElement).fadeOut(1000).fadeIn(1000);
  }

  //HostListener decoratoru ile metodu her hansisa evente icra etme emri vermek olar
  @HostListener("click")
  onClickHandler(): void
  {
    alert("TestAlert0.1")
  }

  @HostBinding("style.color")
  StyleColor: string = "red" 

}
