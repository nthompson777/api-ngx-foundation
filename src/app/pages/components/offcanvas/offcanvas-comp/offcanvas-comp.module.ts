import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { OffcanvasRoutingModule } from '../offcanvas-routing/offcanvas-routing.module';
import { OffcanvasComponent } from '../offcanvas.component';
import { OffcanvasModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    OffcanvasModule.forRoot(),
    TabsModule.forRoot(),
    OffcanvasRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    OffcanvasComponent,
  ]
})
export class OffcanvasCompModule { }
