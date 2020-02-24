import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeDBService } from "../services/employee-db.service";
import { Employee } from "../modal/employee";
import { CalendarModalComponent } from "../calendar-modal/calendar-modal.component";
import { MatDialog } from "@angular/material";
import { AlertModalComponent } from "../alert-modal/alert-modal.component";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.scss"]
})
export class EditEmployeeComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  editPage = false;
  indexId: number;
  empID: number;
  empDetails: Employee[];
  editEmployee: any[];
  resultPopup: any = {};
  headElements = ["ID", "Date", "Description"];
  activeTable: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmployeeDBService,
    private dialog: MatDialog
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      empID: ["", Validators.required],
      doj: ["", [Validators.required]],
      schedule: [[]]
    });
    let userLogin = localStorage.getItem("user");
    console.log(userLogin.length);
    if (!userLogin) {
      this.router.navigate(["/login"]);
    }
  }

  ngOnInit() {
    this.empDetails = this.empService.getAll();
    this.route.params.subscribe(params => {
      this.empID = params["id"];
    });

    this.indexId = this.empDetails.findIndex(x => x.empID == this.empID);
    this.registerForm.patchValue(this.empDetails[this.indexId]);
    this.editEmployee = this.empDetails[this.indexId].schedule;
    if (this.editEmployee.length) {
      this.activeTable = true;
    } else {
      this.activeTable = false;
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.empService.update(this.registerForm.value, this.indexId);
    this.router.navigate(["/dashboard"]);
  }
  logout() {
    localStorage.setItem("user", "");
    this.router.navigate(["/"]);
  }
  cancel() {
    this.router.navigate(["/dashboard"]);
  }

  editSchedule(edit, i) {
    let scheduleIndexid;
    scheduleIndexid = edit.id;
    const dialogCalender = this.dialog.open(CalendarModalComponent, {
      width: "250px",
      data: { calenderEvent: edit, empID: this.empDetails[this.indexId].empID },
      position: { top: "0" }
    });

    dialogCalender.afterClosed().subscribe(result => {
      this.empDetails = this.empService.getAll();
      this.resultPopup = result;
      let Indexnewid;
      Indexnewid = this.editEmployee.findIndex(x => x.id == scheduleIndexid);
      this.editEmployee[Indexnewid].description = this.resultPopup.description;
      this.empService.eventUpdate(this.editEmployee, this.indexId);
    });
  }
  delete(i, name: string) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: "250px",
      data: { yes: "yes" }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.resultPopup = result;
      if (this.resultPopup == "yes") {
        this.editEmployee.splice(i, 1);
        this.empService.eventUpdate(this.editEmployee, this.indexId);
        if (this.editEmployee.length) {
          this.activeTable = true;
        } else {
          this.activeTable = false;
        }
      }
    });
  }
}
