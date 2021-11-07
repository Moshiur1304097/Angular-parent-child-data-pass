import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  count: number =0;

  element: any['value'] ='';

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }
}
