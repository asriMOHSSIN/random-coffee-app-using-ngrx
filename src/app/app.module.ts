import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CoffeesModule } from './components/coffees/coffees.module';
import { CoffeeDetailsModule } from './components/coffee-details/coffee-details.module';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    AppRoutingModule,
    CoffeesModule,
    CoffeeDetailsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
