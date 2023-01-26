import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from '../component/pickup-call-card/pickup-call-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ PickupCallCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[PickupCallCardComponent]
})
export class SharedModule { }
