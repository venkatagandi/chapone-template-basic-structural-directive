import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  one = { message: "hello one", name: "news" };
  two = { message: "hello two", name: "news" };
  three = { message: "hello three", name: "news" };
}
