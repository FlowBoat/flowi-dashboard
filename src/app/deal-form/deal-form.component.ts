import { Component, OnInit } from '@angular/core';

import { Deal } from '../deal.model';

@Component({
  selector: 'deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.css']
})
export class DealFormComponent implements OnInit {

  model = new Deal(1, '', '', 'http://');;
 
  constructor() { }
 
  ngOnInit() {
  }
 
  get currentDeal() { return JSON.stringify(this.model); }

}
