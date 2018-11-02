import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';
import { TooltipModule } from 'ngx-foundation';
import { CollapseModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    GettingStartedRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    GettingStartedComponent,
  ]
})
export class GettingStartedModule { }
