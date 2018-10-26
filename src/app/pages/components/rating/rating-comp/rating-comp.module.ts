import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { RatingRoutingModule } from '../rating-routing/rating-routing.module';
import { RatingComponent } from '../rating.component';
import { RatingModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    RatingRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    RatingComponent,
  ]
})
export class RatingCompModule { }
