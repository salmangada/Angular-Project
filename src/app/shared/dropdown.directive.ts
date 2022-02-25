import { Directive, HostBinding, HostListener,ElementRef } from "@angular/core";

@Directive({
    selector : "[appDropdown]"
})
export class dropdownDirective{
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click',['$event']) toggleOpen(){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    // @HostListener('click') toggleOpen(){
    //         this.isOpen = !this.isOpen;
    // }
    constructor(private elRef: ElementRef) {}
}