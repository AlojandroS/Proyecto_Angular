import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  @HostBinding ('style.text-transform') public textTransform: string = 'lowerCase'

  @HostListener('mouseenter') public onMouseEnter() {
    this.textTransform = 'uppercase'
  }
  
  @HostListener('mouseleave') public onMouseLeave() {
    this.textTransform = 'capitalize'
  }
  

}
