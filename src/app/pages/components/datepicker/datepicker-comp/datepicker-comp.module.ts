import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { DatepickerRoutingModule } from '../datepicker-routing/datepicker-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatepickerComponent } from '../datepicker.component';
import { BsDatepickerModule, TabsModule } from 'ngx-foundation';
import { defineLocale } from 'ngx-foundation/chronos';
import {
  arLocale,
  csLocale,
  daLocale,
  deLocale,
  enGbLocale,
  esDoLocale,
  esLocale,
  esUsLocale,
  frLocale,
  heLocale,
  hiLocale,
  fiLocale,
  glLocale,
  huLocale,
  idLocale,
  itLocale,
  jaLocale,
  koLocale,
  mnLocale,
  nlBeLocale,
  nlLocale,
  plLocale,
  ptBrLocale,
  ruLocale,
  roLocale,
  slLocale,
  svLocale,
  thLocale,
  trLocale,
  zhCnLocale } from 'ngx-foundation/locale';
defineLocale('ar', arLocale);
defineLocale('cs', csLocale);
defineLocale('da', daLocale);
defineLocale('de', deLocale);
defineLocale('en-gb', enGbLocale);
defineLocale('es-do', esDoLocale);
defineLocale('es', esLocale);
defineLocale('es-us', esUsLocale);
defineLocale('fr', frLocale);
defineLocale('he', heLocale);
defineLocale('hi', hiLocale);
defineLocale('fi', fiLocale);
defineLocale('gl', glLocale);
defineLocale('hu', huLocale);
defineLocale('id', idLocale);
defineLocale('it', itLocale);
defineLocale('ja', jaLocale);
defineLocale('ko', koLocale);
defineLocale('mn', mnLocale);
defineLocale('nl-be', nlBeLocale);
defineLocale('nl', nlLocale);
defineLocale('pl', plLocale);
defineLocale('pt-br', ptBrLocale);
defineLocale('ru', ruLocale);
defineLocale('ro', roLocale);
defineLocale('sl', slLocale);
defineLocale('sv', svLocale);
defineLocale('th', thLocale);
defineLocale('tr', trLocale);
defineLocale('zh-cn', zhCnLocale);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    DatepickerRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    DatepickerComponent,
  ]
})
export class DatepickerCompModule { }
