import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'red';
  }

}
