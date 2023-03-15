import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-crear_alarma',
  templateUrl: './crear_alarma.component.html',
  styleUrls: ['./crear_alarma.component.css']
})
export class Crear_alarmaComponent implements OnInit {
  public isMenuOpen: boolean = false;
  dialogRef: any;
  @ViewChild('myInfoDialog') infoDialog = {} as TemplateRef<string>;

  constructor(public dialog: MatDialog) { }

  myInfo = "Namaste to the world!";
  openInfoDialog() {
    this.dialogRef = this.dialog.open(this.infoDialog,
      { data: this.myInfo, height: '350px', width: '270px' });

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
