import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {  Observable, tap } from 'rxjs';
import { loadingCoffees } from 'src/app/store/actions/coffees.actions';
import { areCoffeesLoaded, coffeesEntities, CoffeesState, getApiError, getIsLoading } from 'src/app/store/reducers';
import { loaded } from 'src/app/store/reducers/api.reducer';
import { Coffee } from '../../shared/model/coffee';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

@Output()
coffeesSelected = new EventEmitter<Coffee>();

  p:any;
  itemsperpage:number = 10;
  coffeesList$: Observable<Coffee[]>|null = null;
  isLoading$: Observable<boolean | undefined> | undefined;
  apiError$: Observable<boolean | undefined> | undefined;
  loaded$: Observable<boolean | undefined> | undefined;

  constructor(private store: Store<CoffeesState> ) {
   // this.store.dispatch(loadingCoffees());
    this.loaded$ =  this.store.pipe(select(areCoffeesLoaded));
    this.coffeesList$ = this.store.pipe(select(coffeesEntities));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.apiError$ = this.store.pipe(select(getApiError));
  }

  ngOnInit(): void {
   this.reload();
  }

  onCoffeeSelected(){
    console.log();

  }
  onPagesSelected( pages:string){
   this.itemsperpage = Number(pages);
  }
  reload(){
    this.store.select(areCoffeesLoaded)
        .subscribe(hasLoaded => {
         if (!hasLoaded) this.store.dispatch(loadingCoffees());
    })
  }



}
