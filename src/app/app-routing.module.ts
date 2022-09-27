import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"coffeeDetails",
    loadChildren:()=>import('./components/coffee-details/coffee-details.module').then(m=>m.CoffeeDetailsModule)
  },
  {
    path: 'coffees',
    loadChildren: () => import('./components/coffees/coffees.module').then(m => m.CoffeesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
