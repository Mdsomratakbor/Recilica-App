import { ErrorMessageComponent } from './../component/error-message/error-message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from '../component/pickup-call-card/pickup-call-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ PickupCallCardComponent, ErrorMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[PickupCallCardComponent, ErrorMessageComponent]
})
export class SharedModule { }
