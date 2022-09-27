import { Injectable } from "@angular/core";
import { CoffeeService } from "src/app/shared/services/coffee.service";
import { Action } from '@ngrx/store'
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, Observable, of, switchMap, tap } from "rxjs";
import { loadingCoffees,loadingCoffeesSuccees,loadingCoffeesFails } from "../actions/coffees.actions";
import { Coffee } from "src/app/shared/model/coffee";

@Injectable()
export class CffeesEffect{
  constructor(private coffeesService: CoffeeService, private action$:Actions){}

  fetchCoffees$ = createEffect(
    (): Observable<Action> =>
          this.action$.pipe(ofType(loadingCoffees),
          exhaustMap(()=>{
            return this.coffeesService.getAllCoffees().pipe(
              map((response) => loadingCoffeesSuccees({response})),
              catchError((error) => of(loadingCoffeesFails({error})))
            )
            })
    )
  );

  afterFetchCoffees$ = createEffect(
    (): Observable<Action> =>
    this.action$.pipe(ofType(loadingCoffeesSuccees),
      tap((response)=>console.log(response)))
      ,{dispatch:false})

}
