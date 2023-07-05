import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchCatsComponent } from './cats/search-cats/search-cats.component';
import { NewCatComponent } from './cats/new-cat/new-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCatsComponent,
    NewCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
