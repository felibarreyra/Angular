import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { BootsList } from './boots-list/boots-list';
import { Cart } from './cart/cart';
import { InputInteger } from './input-integer/input-integer';
import { PurofutbolAbout } from './purofutbol-about/purofutbol-about';
import { PurofutbolBoots } from './purofutbol-boots/purofutbol-boots';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    BootsList,
    Cart,
    InputInteger,
    PurofutbolAbout,
    PurofutbolBoots
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
