import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pend-object',
  templateUrl: './pend-object.component.html',
  styleUrls: ['./pend-object.component.css']
})
export class PendObjectComponent implements OnInit {
  @Input() pendNum: any;

  constructor() { }

  ngOnInit() {
  }

}
