import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    let userLogin;
    userLogin = localStorage.getItem("user");
    // reset login status
    if (userLogin) {
      this.router.navigate(["/dashboard"]);
    }
  }
}
