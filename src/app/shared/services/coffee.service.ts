import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Coffee } from "../model/coffee";
@Injectable()
export class CoffeeService{

  constructor(private http:HttpClient){}

  public getAllCoffees():Observable<Coffee[]>{
    console.log("##Service##====>service called");

    return this.http.get<Coffee[]>("https://random-data-api.com/api/coffee/random_coffee?size=100");
  }

  public getSelectedCoffee(id:number):Observable<Coffee>{
    return this.http.get<Coffee>("https://random-data-api.com/api/coffee/random_coffee?id="+id);
  }

}
