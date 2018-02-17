import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './deal-creation.component.html',
  styleUrls: ['./deal-creation.component.css']
})
export class DealCreationComponent implements OnInit {
  options = [
      {id: '1', name: 'one'},
      {id: '2', name: 'two'},
      {id: '3', name: 'three'}
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
