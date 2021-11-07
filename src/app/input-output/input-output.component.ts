import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  item='';

  @Output()
  deleteRequest = new EventEmitter<string>();


  lineThrough ='';

  delete(){
    console.warn('child says: emitting deleteRequest with', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
    console.log("Delete clicked");
  }
}
