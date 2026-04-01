import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})
export class App {
  username = 'yOunGTECh';
}

//Pipes are functions that are used to transform data in templates. 
// In general, pipes are "pure" functions that don't cause side effects. 
// Angular has a number of helpful built-in pipes you can import and use in your components. You can also create a custom pipe.