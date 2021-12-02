import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

orders=[
  {id:1, title: 'Order 1'}, 
  {id:2, title: 'Order 2'},
  {id:3, title: 'Order 3'},
  {id:4, title: 'Order 4'}

]

  constructor() { }

  ngOnInit(): void {
  }

}
