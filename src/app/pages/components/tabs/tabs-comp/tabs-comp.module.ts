import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { TabsRoutingModule } from '../tabs-routing/tabs-routing.module';
import { TabsComponent } from '../tabs.component';
import { TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    TabsRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    TabsComponent,
  ]
})
export class TabsCompModule { }
