import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // component director
  templateUrl: './app.component.html',
  //template: '<h1>Hello World</h1>',
  styleUrls: ['./app.component.scss']
  //styles: ['h1{color:blue}']
})
export class AppComponent {
  title = 'Front end track 2024';

  sayHello():string{
    return `Hello, ${this.title}`;
  }
}
