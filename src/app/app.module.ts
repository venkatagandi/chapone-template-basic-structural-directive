import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstDirective } from "./directives/first.directive";
import { BasicComponent } from "./basic/basic.component";
import { TrackDirective } from "./directives/track.directive";
import { TrackdirComponent } from "./trackdir/trackdir.component";
import { TrackingService } from "./trackdir/services/tracking.service";
import { OnlineService } from "./trackdir/services/online.service";
import { OnlineDirective } from "./directives/online.directive";
import { ThreeDirective } from "./directives/three.directive";

@NgModule({
  declarations: [
    AppComponent,
    FirstDirective,
    TrackDirective,
    OnlineDirective,
    ThreeDirective,
    BasicComponent,
    TrackdirComponent
  ],
  imports: [BrowserModule],
  providers: [TrackingService, OnlineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
