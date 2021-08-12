import { SigninRoutingModule } from './signin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageAlertComponent } from 'src/app/components/alerts/message-alerts/message-alert/message-alert.component';



@NgModule({
  declarations: [SigninComponent, MessageAlertComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
