import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge';

  onomatopoeiaList: Array<string>;


  constructor() {
    this.onomatopoeiaList = [];

  }

  onReceiveNewOnomatopia(newOnomatopia: string): void {

    this.onomatopoeiaList.push(newOnomatopia);

  }
}
