import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRoutes } from '@angular/router';

import { AppComponent } from './app.component';

import { PhotogalaryComponent } from './photo-galary.component';
import { AppRoutingModule } from './app-routing.module';
import { SuperHeroService } from './superhero.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotogalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SuperHeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
