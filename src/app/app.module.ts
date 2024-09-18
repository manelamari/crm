import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [
    provideHttpClient(),
     { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
