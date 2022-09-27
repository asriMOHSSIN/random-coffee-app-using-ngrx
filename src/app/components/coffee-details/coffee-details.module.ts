import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeDetailsComponent } from './coffee-details.component';
import { CoffeeDetailsRoutingModule } from './coffee-details-routing.module';



@NgModule({
  declarations: [
    CoffeeDetailsComponent
  ],
  imports: [
    CommonModule,
    CoffeeDetailsRoutingModule
  ]
})
export class CoffeeDetailsModule { }
