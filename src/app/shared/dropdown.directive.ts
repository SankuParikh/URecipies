// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {

//   @HostBinding('class.open') isOpen = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
//   constructor() { }

// }


import { Directive, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  manageDropdown : boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2)   {

  }

  @HostListener('click') openDropdown(eventData: Event) {
    if(!this.manageDropdown) {
      this.renderer.addClass(this.elementRef.nativeElement,'open');
      this.manageDropdown = !this.manageDropdown;
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      this.manageDropdown = !this.manageDropdown;
    }
  }
}