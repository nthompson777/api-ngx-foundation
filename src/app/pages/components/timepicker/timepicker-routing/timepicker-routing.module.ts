import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimepickerComponent } from '../timepicker.component';


const routes: Routes = [
  {
    path: '',
    component: TimepickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimepickerRoutingModule { }
