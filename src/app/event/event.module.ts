import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
    declarations: [EventDetailComponent],
    exports: [EventDetailComponent]
})
export class EventModule { }
