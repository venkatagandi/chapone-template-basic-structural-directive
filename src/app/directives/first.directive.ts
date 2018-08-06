import { Directive, HostBinding, Input, HostListener } from "@angular/core";

// @Directive({
//   selector: "h1"
// })
// export class FirstDirective {
//   @HostBinding() innerText = "Iam a directive";
//   constructor() {}
// }

//attribute selector
@Directive({
  selector: "[first]"
})
export class FirstDirective {
  @Input("first") first: string;
  @HostBinding()
  get innerText() {
    return this.first;
  }

  @HostListener("click", ["$event"])
  onClick(e) {
    console.log("click", e);
    this.first = "clicked";
  }
  constructor() {}
}
