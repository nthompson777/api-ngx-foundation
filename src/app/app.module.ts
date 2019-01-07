import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { OffcanvasModule } from 'ngx-foundation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeLayoutComponent } from './shared/layout/home-layout/home-layout.component';
import { SubpageLayoutComponent } from './shared/layout/subpage-layout/subpage-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { PushNotificationService } from './services/push-notification.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent,
    SubpageLayoutComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    OffcanvasModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
