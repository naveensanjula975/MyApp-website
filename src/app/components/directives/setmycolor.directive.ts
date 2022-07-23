import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'red';
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.SetColor('blue')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.SetColor('green')
  }

  private SetColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
