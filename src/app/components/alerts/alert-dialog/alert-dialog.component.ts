import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData{
  titulo?: string,
  mensagem: string
}

@Component({
  selector: 'dialog-data-dialog',
  templateUrl: 'dialog-data.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class DialogDataTemplate {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
