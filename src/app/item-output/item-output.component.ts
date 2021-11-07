import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  newItemEvent = new EventEmitter<string>();


  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

}
