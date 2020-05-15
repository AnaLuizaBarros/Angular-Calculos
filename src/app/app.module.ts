import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BhaskaraComponent } from './Calculos/bhaskara/bhaskara.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeltaComponent } from './Calculos/delta/delta.component';
import { HeaderComponent } from './Header/header/header.component';
import { HomeComponent } from './Home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BhaskaraComponent,
    DeltaComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
