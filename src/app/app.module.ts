import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './component';
import { AppService, RestService } from './core/services';

export function loadConfig(appService: AppService, restService: RestService) {
  return () =>
      restService.get(environment.configUrl)
      .toPromise()
      .then( config => {
        appService.setConfig(config);
      });
}

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    CoreModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      multi: true,
      deps: [AppService, RestService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
