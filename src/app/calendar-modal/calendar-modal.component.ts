import { Component, OnInit, Inject } from "@angular/core";

import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from "@angular/material/dialog";
import { EmployeeDBService } from "../services/employee-db.service";

@Component({
  selector: "app-calendar-modal",
  templateUrl: "./calendar-modal.component.html",
  styleUrls: ["./calendar-modal.component.scss"]
})
export class CalendarModalComponent {
  employeeName: [];
  calenderEvent: any = {
    description: "",
    empId: ""
  };
  empID: any;
  editName: boolean = false;

  constructor(
    private empService: EmployeeDBService,
    private dialogRef: MatDialogRef<CalendarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    if (data) {
      this.calenderEvent.description = data.calenderEvent.description;
      this.calenderEvent.empID = data.empID;
      this.editName = true;
      console.log("hji");
    }
    this.employeeName = this.empService.getAll();
  }
  public closeMe() {
    this.dialogRef.close();
  }
}
