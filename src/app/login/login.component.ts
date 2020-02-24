import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    let userLogin;
    userLogin = localStorage.getItem("user");
    console.log(userLogin.length);
    if (userLogin) {
      this.router.navigate(["/dashboard"]);
    }
    else{
      this.router.navigate(["/login"]);

    }
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.f.username.value == "test123" && this.f.password.value == "123") {
     let userDetails = {
        user: this.f.username.value,
        pswd: this.f.password.value
      };
      localStorage.setItem("user", userDetails.user);
      this.router.navigate(["/dashboard"]);
    } else {
      this.loading = false;
    }
  }
}
