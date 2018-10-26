import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevealComponent } from '../reveal.component';


const routes: Routes = [
  {
    path: '',
    component: RevealComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevealRoutingModule { }
