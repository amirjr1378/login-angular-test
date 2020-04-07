import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  declarations: [AdminComponent]
})
export class PrivateModule { }
