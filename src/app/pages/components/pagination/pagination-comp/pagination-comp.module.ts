import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { PaginationRoutingModule } from '../pagination-routing/pagination-routing.module';
import { PaginationComponent } from '../pagination.component';
import { PaginationModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    PaginationRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    PaginationComponent,
  ]
})
export class PaginationCompModule { }
