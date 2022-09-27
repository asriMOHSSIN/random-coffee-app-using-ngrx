import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../shared/services/coffee.service';
import { CoffeesComponent } from './coffees.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoffeesRoutingModule } from './coffees-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';
import { CffeesEffect } from 'src/app/store/effects/coffees.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    CoffeesComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    CoffeesRoutingModule,
    StoreModule.forFeature("coffee",reducers),
    EffectsModule.forFeature([CffeesEffect])
  ],

  providers: [CoffeeService ]

})
export class CoffeesModule { }
