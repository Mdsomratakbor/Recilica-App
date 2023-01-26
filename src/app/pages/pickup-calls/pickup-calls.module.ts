import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PickupCallsPageRoutingModule } from './pickup-calls-routing.module';
import { PickupCallsPage } from './pickup-calls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallsPageRoutingModule,
    SharedModule
  ],
  declarations: [PickupCallsPage]
})
export class PickupCallsPageModule {}
