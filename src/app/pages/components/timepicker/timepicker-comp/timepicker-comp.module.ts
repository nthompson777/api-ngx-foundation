import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { TimepickerRoutingModule } from '../timepicker-routing/timepicker-routing.module';
import { TimepickerComponent } from '../timepicker.component';
import { TimepickerModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    TimepickerComponent,
  ]
})
export class TimepickerCompModule { }
