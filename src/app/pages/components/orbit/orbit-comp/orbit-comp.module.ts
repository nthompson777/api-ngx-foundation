import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { OrbitRoutingModule } from '../orbit-routing/orbit-routing.module';
import { OrbitComponent } from '../orbit.component';
import { CarouselModule, TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    OrbitRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    OrbitComponent,
  ]
})
export class OrbitCompModule { }
