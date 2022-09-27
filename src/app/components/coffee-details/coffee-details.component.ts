
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Coffee } from '../../shared/model/coffee';


@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {


  _coffee :Coffee | null=null;

  constructor(private router:Router,private store: Store<any>) {
      this._coffee = this.router.getCurrentNavigation()?.extras.state as Coffee;

  }



  ngOnInit(): void {

  }


}
