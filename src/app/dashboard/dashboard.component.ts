import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { EmployeeDBService } from "../services/employee-db.service";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material";
import { AlertModalComponent } from "../alert-modal/alert-modal.component";
import { CalendarModalComponent } from "../calendar-modal/calendar-modal.component";
import * as moment from "moment";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  // @Output() update = new EventEmitter();

  empDetails: any = [];

  activeTable: boolean = false;
  headElements = ["empID", "First Name", "Last Name", "DOJ"];
  resultPopup: any;
  dateValue: Date;
  indexId: any;
  constructor(
    private empService: EmployeeDBService,
    private router: Router,
    private dialog: MatDialog
  ) {
    let userLogin = localStorage.getItem("user");
    console.log(userLogin.length);
    if (!userLogin) {
      this.router.navigate(["/login"]);
    }
  }

  ngOnInit() {
    this.empDetails = this.empService.getAll();
    console.log(this.empService.getAll());
    if (this.empDetails != null ) {
      if (this.empDetails.length > 0) {
        this.activeTable = true;
      } else {
        this.activeTable = false;
      }
    }
  }
  update(id, i) {
    this.router.navigate(["/editemployee", id.empID]);
  }
 
  delete(i, name: string) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      id : "modal-component",
      width: "250px",
      data: { yes: "yes" },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resultPopup = result;
      if (this.resultPopup == "yes") {
        this.empService.delete(i);
        this.empDetails = this.empService.getAll();
        if (this.empDetails.length) {
          this.activeTable = true;
        } else {
          this.activeTable = false;
        }
      }
    });
  
  }
  logout() {
    localStorage.setItem("user", "");
    this.router.navigate(["/"]);
  }
}
