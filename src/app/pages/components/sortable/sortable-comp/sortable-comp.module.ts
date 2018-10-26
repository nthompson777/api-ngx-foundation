import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { SortableRoutingModule } from '../sortable-routing/sortable-routing.module';
import { SortableComponent } from '../sortable.component';
import { SortableModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    SortableRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    SortableComponent,
  ]
})
export class SortableCompModule { }
