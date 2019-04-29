import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendulum-fx',
  templateUrl: './pendulum-fx.component.html',
  styleUrls: ['./pendulum-fx.component.css']
})
export class PendulumFxComponent implements OnInit {
  chain = [{ num: '2' }];

  constructor() {}

  ngOnInit() {
  }

  // push pop random values into array to make new colors
}
