import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CounterModule } from './counter/counter.module';
import { HeroeModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroeModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
