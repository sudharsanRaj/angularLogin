import { Component, Inject, Injectable } from "@angular/core";

import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from "@angular/material/dialog";

@Component({
  templateUrl: "./alert-modal.component.html"
})
export class AlertModalComponent {
  constructor(
    private dialogRef: MatDialogRef<AlertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  public closeMe() {
    this.dialogRef.close();
  }
}
