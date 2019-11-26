import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[myBgColor]'
})

export class BackgroundColorDirective implements OnInit {

    constructor(private el:ElementRef, private renderer: Renderer2) { }
    ngOnInit() { }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(
            this.el.nativeElement,
            "background-color",
            "pink"
        )
        this.renderer.setStyle(
            this.el.nativeElement,
            "color",
            "black"
        )
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(
            this.el.nativeElement,
            "background-color",
            "#fff"
        )
        this.renderer.setStyle(
            this.el.nativeElement,
            "color",
            "blue"
        )
    }

    @HostListener('click') onMouseClick() {
        this.renderer.setStyle(
            this.el.nativeElement,
            "background-color",
            "blue"
        )
        this.renderer.setStyle(
            this.el.nativeElement,
            "color",
            "white"
        )
    }
}