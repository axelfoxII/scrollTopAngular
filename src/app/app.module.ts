import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Item1Component } from './pages/item1/item1.component';
import { Item2Component } from './pages/item2/item2.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    Item1Component,
    Item2Component,
    NavbarComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
