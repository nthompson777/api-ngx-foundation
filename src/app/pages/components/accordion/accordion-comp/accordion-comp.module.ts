import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { AccordionRoutingModule } from '../accordion-routing/accordion-routing.module';
import { AccordionComponent } from '../accordion.component';
import { AccordionModule, CollapseModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    AccordionRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    AccordionComponent,
  ]
})
export class AccordionCompModule { }
