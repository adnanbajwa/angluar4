import { Component } from '@angular/core';

@Component({
  selector: 'srvup-root',
  templateUrl: './app.component.html',
  // template:`<h1>{{title}}</h1><p> {{description}}! cool</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  description = 'some description';
}