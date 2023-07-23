import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() success: String;
  constructor(private elRef:ElementRef) {
    this.success="true";
   }

  

  @HostListener("mouseenter")
  enter():void{
    if(this.success=="true"){
      this.elRef.nativeElement.classList.add("highlight")
    }
    else{
      this.elRef.nativeElement.classList.add("highlightError")
    }
    
  }
  @HostListener("mouseleave")
  leave():void{
    if(this.success=="true"){
      this.elRef.nativeElement.classList.remove("highlight")
    }
    else{
      this.elRef.nativeElement.classList.remove("highlightError")
    }
  }

}
