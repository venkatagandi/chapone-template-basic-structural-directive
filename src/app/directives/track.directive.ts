import { Directive, HostBinding, Input, HostListener } from "@angular/core";
import { TrackingService } from "../trackdir/services/tracking.service";

//attribute selector
@Directive({
  selector: "[track]"
})
export class TrackDirective {
  @Input("track") track: string;
  // @HostBinding()
  // get innerText() {
  //   return this.track;
  // }

  @HostListener("click", ["$event"])
  onclick(e) {
    console.log(`${this.track} is clicked`);
    this.trackingService.log({ event: "click", message: this.track });
  }

  @HostListener("mouseover", ["$event"])
  onmouseover(e) {
    console.log(`${this.track} is mouse hovered`);
    this.trackingService.log({ event: "mouseover", message: this.track });
  }
  constructor(private trackingService: TrackingService) {}
}
