import { Injectable } from "@angular/core";
import { Employee } from "../modal/employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeDBService {
  setEmployee: any;
  editEmployeeId: any;
  employeeDetails = [];

  constructor() {}

  
  getAll() {
    let getData;
    if(localStorage.getItem("detailsEmployee"))
    getData = JSON.parse(localStorage.getItem("detailsEmployee"));
    return getData;
  }

  register(user: Employee) {
    this.employeeDetails.push(user);
    localStorage.setItem("detailsEmployee",JSON.stringify(this.employeeDetails));
  }

  update(data, index) {
    let editData;
    editData = JSON.parse(localStorage.getItem("detailsEmployee"));
    editData[index] = data;
    localStorage.setItem("detailsEmployee", JSON.stringify(editData));
  }

  eventCreate(data, index) {
    let editData;
    editData = JSON.parse(localStorage.getItem("detailsEmployee"));
    editData[index].schedule.push(data);
    localStorage.setItem("detailsEmployee", JSON.stringify(editData));
  }

  eventUpdate(data, index) {
    let editData;
    editData = JSON.parse(localStorage.getItem("detailsEmployee"));
    editData[index].schedule = data;
    localStorage.setItem("detailsEmployee", JSON.stringify(editData));
  }

  delete(id: number) {
    let deleteData;
    deleteData = JSON.parse(localStorage.getItem("detailsEmployee"));
    deleteData.splice(id, 1);
    localStorage.setItem("detailsEmployee", JSON.stringify(deleteData));
  }
}
