import { Injectable } from "@angular/core";

@Injectable()
export class TrackingService {
  logs = [];
  constructor() {}
  log(trackingEvent) {
    this.logs.push(trackingEvent);
    console.log(this.logs);
  }
}
