import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import {
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,
  ModalModule,
  OffcanvasModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { SubpageLayoutComponent } from './layout/subpage-layout/subpage-layout.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    OffcanvasModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  exports: [
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,
    ModalModule,
    OffcanvasModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    HighlightModule
  ],
  declarations: [HomeLayoutComponent, SubpageLayoutComponent]
})
export class SharedFoundationModule { }