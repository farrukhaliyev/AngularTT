import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomFor]'
})
export class CustomForDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) 
  {
  }

  // @Input() set appCustomFor(values : number)
  // {
  //   for (let i = 0; i < values; i++) {
  //     this.viewContainerRef.createEmbeddedView(this.templateRef, {
  //       index: i
  //     })
  //   }
  // }

  @Input() set appCustomFor(values: string[]) 
  {
    for (let i = 0; i < values.length; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: values[i]
      })
    }
  }

}
