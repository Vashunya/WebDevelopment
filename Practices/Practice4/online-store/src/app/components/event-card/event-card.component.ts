import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketonEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input({ required: true }) event!: TicketonEvent;

  activeImage = 0;

  shareWhatsapp(): void {
    const text = encodeURIComponent('Check out this event: ' + this.event.link);
    window.open('https://wa.me/?text=' + text, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.event.link);
    const text = encodeURIComponent(this.event.name);
    window.open('https://t.me/share/url?url=' + url + '&text=' + text, '_blank');
  }
}
