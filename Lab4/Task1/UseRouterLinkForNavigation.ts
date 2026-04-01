import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterLink,RouterOutlet],
})
export class App {}


//When you click on the links in the navigation now, you should not see any blinking and only the content of the page itself 
// (i.e., router-outlet) being changed 🎉