import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { DropdownsRoutingModule } from '../dropdowns-routing/dropdowns-routing.module';
import { DropdownsComponent } from '../dropdowns.component';
import { BsDropdownModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    DropdownsRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    DropdownsComponent,
  ]
})
export class DropdownsCompModule { }
