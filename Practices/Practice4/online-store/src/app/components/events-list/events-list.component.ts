import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketonEvent } from '../../models/event.model';
import { EventsService } from '../../services/events.service';
import { EventCardComponent } from '../event-card/event-card.component';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {
  events: TicketonEvent[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }
}
