import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipRoutingModule } from '../tooltip-routing/tooltip-routing.module';
import { TooltipComponent } from '../tooltip.component';
import { TooltipModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    TooltipRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    TooltipComponent,
  ]
})
export class TooltipCompModule { }
