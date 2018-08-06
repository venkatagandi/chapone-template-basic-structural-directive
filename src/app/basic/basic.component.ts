import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"]
})
export class BasicComponent implements OnInit {
  @ViewChild("foo") template;
  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.createEmbeddedView(this.template);
  }
}
