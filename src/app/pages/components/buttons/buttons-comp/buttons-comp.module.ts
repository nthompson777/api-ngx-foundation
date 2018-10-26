import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { ButtonsRoutingModule } from '../buttons-routing/buttons-routing.module';
import { ButtonsComponent } from '../buttons.component';
import { ButtonsModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    ButtonsComponent,
  ]
})
export class ButtonsCompModule { }
