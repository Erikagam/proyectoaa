import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpModule} from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DdsubmarcaComponent } from './ddsubmarca/ddsubmarca.component';
import { DdacuraComponent } from './ddacura/ddacura.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DdsubmarcaComponent,
    DdacuraComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
