import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  ViewContainerRef,
  TemplateRef,
  ElementRef
} from "@angular/core";

//attribute selector
@Directive({
  selector: "[three]"
})
export class ThreeDirective {
  @Input("three") three: string;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>,
    private el: ElementRef
  ) {
    console.log(el.nativeElement);
  }

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.createEmbeddedView(this.template);
  }
}
