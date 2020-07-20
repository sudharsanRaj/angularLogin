import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { EmployeeDBService } from "../services/employee-db.service";
import { Employee } from "../modal/employee";

@Component({
  selector: "app-employeedetails",
  templateUrl: "./employeedetails.component.html",
  styleUrls: ["./employeedetails.component.scss"]
})
export class EmployeedetailsComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  editPage = false;
  indexId: number;
  employeeDetails: Employee[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmployeeDBService
  ) {
    let userLogin = localStorage.getItem("user");
    console.log(userLogin.length);
    if (!userLogin) {
      this.router.navigate(["/login"]);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      empID: [""],
      doj: ["", [Validators.required]],
      schedule: [[]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.employeeDetails = this.empService.getAll();
    console.log(this.employeeDetails);
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    let userId;
    if (this.employeeDetails == null || this.employeeDetails.length == 0) {
      userId = 1;
    } else {
      userId = this.employeeDetails[this.employeeDetails.length - 1].empID + 1;
    }
    console.log(userId);
    this.registerForm.value.empID = userId;
    this.empService.register(this.registerForm.value);
    this.router.navigate(["/dashboard"]);
  }

  logout() {
    localStorage.setItem("user", "");
    this.router.navigate(["/"]);
  }

  cancel() {
    this.router.navigate(["/dashboard"]);
  }
}
