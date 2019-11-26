import { Directive, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[myColor]'
})

export class ColorDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2) { }
    ngOnInit() {
        this.renderer.setStyle(
            this.el.nativeElement,
            "color",
            "blue"
        )
    }
}