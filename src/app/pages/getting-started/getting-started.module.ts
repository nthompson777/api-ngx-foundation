import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';
import { CollapseModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    GettingStartedRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    GettingStartedComponent,
  ]
})
export class GettingStartedModule { }
