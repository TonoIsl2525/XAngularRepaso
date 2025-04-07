import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector: '[setBackground]'
})
export class SetBackGroundDirective implements OnInit{
    //private element: ElementRef;
    constructor(private element: ElementRef){
        //element.nativeElement.style.backgroundColor = '#cbe6c9';
        this.element = element;
    }
    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = '#cbe6c9';
    }
}
