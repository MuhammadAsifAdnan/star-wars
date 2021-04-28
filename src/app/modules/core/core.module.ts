import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppConfigInitializer } from './services/app.initializer.service';
import { AppConfigService } from './services/app.config.service';

import { MatToolbarModule } from '@angular/material/toolbar';

import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: AppConfigInitializer,
      deps: [AppConfigService],
      multi: true,
    }
  ],
  exports: [
    NavigationComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
