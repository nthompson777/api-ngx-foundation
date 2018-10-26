import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { RevealRoutingModule } from '../reveal-routing/reveal-routing.module';
import { RevealComponent } from '../reveal.component';
import { ModalModule, TabsModule } from 'ngx-foundation';

import { MessageService } from '../../../../services/message.service';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    RevealRoutingModule,
    HighlightModule.forRoot({ theme: 'atom-one-light'}),
  ],
  declarations: [
    RevealComponent,
    DialogBodyComponent,
  ],
  providers: [
    MessageService
  ],
  entryComponents: [
    DialogBodyComponent
  ]
})
export class RevealCompModule { }
