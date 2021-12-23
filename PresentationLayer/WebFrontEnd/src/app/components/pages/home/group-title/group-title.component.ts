import { Component, Input, OnInit } from '@angular/core';
import { ITransactionGroup } from 'src/app/model/transactionGroup';

@Component({
  selector: 'app-group-title',
  templateUrl: './group-title.component.html',
  styleUrls: ['./group-title.component.css']
})
export class GroupTitleComponent implements OnInit {
@Input() data?:ITransactionGroup

  constructor() { }

  /*
  total(){
    return this.data?.total;
  }*/

  title(){
    if(this.data?.group){
      return this.data?.group?.name
    }
    else
    {
      return "unassigned"
    }
  }

  ngOnInit(): void {
  }

}
