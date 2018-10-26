import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { GlobalPipesModule } from '../../../../pipes/global-pipes.module';
import { ProgressbarRoutingModule } from '../progressbar-routing/progressbar-routing.module';
import { ProgressbarComponent } from '../progressbar.component';
import { ProgressbarModule, TabsModule, TooltipModule } from 'ngx-foundation';

@NgModule({
  imports: [
    CommonModule,
    GlobalPipesModule,
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ProgressbarRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    ProgressbarComponent,
  ]
})
export class ProgressbarCompModule { }
