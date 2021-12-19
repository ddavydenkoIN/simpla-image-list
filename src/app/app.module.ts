import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageModule } from './modules/home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomePageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
