import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { _STORE_FEATURES } from '@ngrx/store/src/tokens';
import { map, tap } from 'rxjs/operators';
import { TransactionsSelectors } from 'src/app/store/transactions/transactions.seletors';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  balanceGraph = {
    data$: this._store.select(TransactionsSelectors.getBalance)
        .pipe(map(({plus, minus})=> ([
          {
              x:["income"],
              y:[plus],
              type:'bar',
              text: [`${plus.toFixed(0)} €`],
          },
          {
              x:["spendings"],
              y:[minus],
              type:'bar',
              text: [`${minus.toFixed(0)} €`],
          },
    ]))),
    layout: {
        width:320, 
        height:420,
        barmode:'group',
        showlegend:false
      }
   }

   pieChart = {
     data$: this._store.select(TransactionsSelectors.getPartitioning)
          .pipe(map((results)=>([{
            values:results.map(({value})=>value),
            labels:results.map(({group})=>group.group?.name),
            type:'pie',
          }]))),
     layout:{
      width:500, 
      height:400,
     }
   }


  constructor(private _store:Store) {
    
  }

  ngOnInit(): void {
  }

}
