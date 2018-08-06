import { Directive, HostBinding, Input, HostListener } from "@angular/core";
import { OnlineService } from "../trackdir/services/online.service";

//attribute selector
@Directive({
  selector: "[online]"
})
export class OnlineDirective {
  @Input("online") online: string;
  @HostBinding("disabled")
  get disabled() {
    return this.onlineService.online;
  }
  @HostBinding("class.offline")
  get offline() {
    return this.onlineService.online;
  }
  constructor(private onlineService: OnlineService) {}
}
