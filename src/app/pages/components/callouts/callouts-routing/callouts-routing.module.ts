import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalloutsComponent } from '../callouts.component';


const routes: Routes = [
  {
    path: '',
    component: CalloutsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalloutsRoutingModule { }
