import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{
  //private elemRef;
  @Input('LightBox') highLightColor:string="yellow";
  @Input() defaultColor:string="darkblue";

  constructor(private elemRef: ElementRef) {
    // elemRef.nativeElement.style.border="2px solid darkblue";
  }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border=`2px solid ${this.defaultColor}` ;
  }
  @HostListener('mouseover') onMouseOver(){
    this.elemRef.nativeElement.style.border=`3px solid ${this.highLightColor}`;
  }
  @HostListener('mouseout') onMouseout(){
    this.elemRef.nativeElement.style.border=`2px solid ${this.defaultColor}`;
  }

}
