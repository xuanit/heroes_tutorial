import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import {HttpModule} from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import { AppComponent }   from './app.component';
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent
  ],
  bootstrap:    [ AppComponent ],
    providers: [HeroService]
})
export class AppModule { }