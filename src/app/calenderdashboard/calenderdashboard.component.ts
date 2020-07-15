import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from "moment";
import { EmployeeDBService } from '../services/employee-db.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CalendarModalComponent } from '../calendar-modal/calendar-modal.component';

@Component({
  selector: 'app-calenderdashboard',
  templateUrl: './calenderdashboard.component.html',
  styleUrls: ['./calenderdashboard.component.scss']
})
export class CalenderdashboardComponent implements OnInit {

  dateValue:any;

  empDetails: any = [];
  resultPopup:any;
  indexId:number;
  constructor(  private empService: EmployeeDBService,
    private router: Router,
    private dialog: MatDialog) { 
      let userLogin = localStorage.getItem("user");
      console.log(userLogin.length);
      if (!userLogin) {
        this.router.navigate(["/login"]);
      }
  
  }
  ngOnInit() {
  }
  datePick() {
    let myMoment = moment(this.dateValue).format("DD/MM/YYYY");
    const dialogCalender = this.dialog.open(CalendarModalComponent, {
      width: "350px",
   
    });

    dialogCalender.afterClosed().subscribe(result => {
      this.empDetails = this.empService.getAll();
      this.resultPopup = result;
      this.indexId = this.empDetails.findIndex(
        x => x.empID == this.resultPopup.empID
      );
      let userId;
      let obj = this.empDetails[this.indexId];
      if (obj.schedule == [] || obj.schedule.length == 0) {
        userId = 1;
      } else {
        userId = obj.schedule[obj.schedule.length - 1].id + 1;
      }
      let eventValue = {};
      eventValue = {
        id: userId,
        date: myMoment,
        description: this.resultPopup.description
      };
      this.empService.eventCreate(eventValue, this.indexId);
    });
  }

}
