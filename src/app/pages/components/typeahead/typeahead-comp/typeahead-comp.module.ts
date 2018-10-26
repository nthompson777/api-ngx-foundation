import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { TypeaheadRoutingModule } from '../typeahead-routing/typeahead-routing.module';
import { TypeaheadComponent } from '../typeahead.component';
import { TypeaheadModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    TypeaheadComponent,
  ]
})
export class TypeaheadCompModule { }
