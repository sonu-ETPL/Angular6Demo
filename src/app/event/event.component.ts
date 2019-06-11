import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  selectedEvent: Event;
  events: Event[] = [
    new Event( 'Munshyari Trip', 'Outing', 'Munshyari road trip  Per Person Cost: 1500 INR', 'assets/event.jpg', new Date()),
    new Event('Lunch to BB Nation', 'Lunch', 'BB Nation Lunch Plan 25th Mar 2019', 'assets/lunch.jpg', new Date()),
    new Event('Sonu Farewell', 'Lunch', 'Domino Pizza Party 31st Oct 2019 4 pm Cafe 2', 'assets/farewell.jpg', new Date()),
    new Event( 'Agra Trip', 'Outing', 'Agra road trip  Per Person Cost: 1500 INR', 'assets/agra.jpg', new Date()),
    new Event('Lunch to Pirates of Grill', 'Lunch', 'Pirates of Grill Lunch Plan 2nd July 2019', 'assets/grill.jpg', new Date())
  ];
  constructor() { }
  ngOnInit() {
  }
  onSelect(event: Event) {
    this.selectedEvent = event;
    // alert('Event Selected ' + this.selectedEvent.name);
  }

}
