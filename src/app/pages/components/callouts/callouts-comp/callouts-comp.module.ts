import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { CalloutsRoutingModule } from '../callouts-routing/callouts-routing.module';
import { CalloutsComponent } from '../callouts.component';
import { AlertModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    CalloutsRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    CalloutsComponent,
  ]
})
export class CalloutsCompModule { }
