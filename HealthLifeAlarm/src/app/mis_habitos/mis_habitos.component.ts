import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-mis_habitos',
  templateUrl: './mis_habitos.component.html',
  styleUrls: ['./mis_habitos.component.css']
})
export class Mis_habitosComponent implements OnInit {
  public isMenuOpen: boolean = false;
  dialogRef: any;
  animal: string | undefined;
  name: string | undefined;
  @ViewChild('myInfoDialog') infoDialog = {} as TemplateRef<string>;

  constructor(public dialog: MatDialog) { }

  myInfo = "Namaste to the world!";
  openInfoDialog() {
    this.dialogRef = this.dialog.open(this.infoDialog,
      { data: this.myInfo, height: '310px', width: '270px' });

    this.dialogRef.afterClosed().subscribe(() => {
      console.log('The Info dialog was closed.');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
