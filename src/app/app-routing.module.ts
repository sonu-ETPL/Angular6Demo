import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { MembersComponent } from './members/members.component';
import { FundComponent } from './fund/fund.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
const routes: Routes = [
{ path: 'event', component: EventComponent},
{ path: 'members', component: MembersComponent },
{ path: 'fund', component: FundComponent },
{ path: 'gallery', component: ImageGalleryComponent },
{ path: '**', redirectTo: '/event' }
];
@NgModule({
imports: [RouterModule.forRoot(routes, { enableTracing: true })],
exports: [RouterModule]
})
export class AppRoutingModule { }
