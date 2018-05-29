import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2HighchartsModule } from 'ng2-highcharts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2HighchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
