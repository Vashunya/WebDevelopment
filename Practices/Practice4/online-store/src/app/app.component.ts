import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="background-color: #3f51b5; padding: 16px; color: white; margin-bottom: 20px;">
      <h1 style="margin: 0; font-size: 22px;">Ticketon Events</h1>
    </div>
    <router-outlet />
  `
})
export class AppComponent {
  title = 'online-store';
}
