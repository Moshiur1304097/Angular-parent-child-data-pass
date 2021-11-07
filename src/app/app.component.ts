import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-data-pass';

  initialCount: number = 10;

  currentItem ='Television';

  items =['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string){
    this.items.push(newItem);
  }

  crossOfItem(item: string){
    console.warn(`Parent says: crossing off ${item}`);
  }
}
