import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { MembersComponent } from './members/members.component';
import { FundComponent } from './fund/fund.component';
import { EventModule } from './event/event.module';
import { MemberModule } from './members/member.module';
import { AppRoutingModule } from './app-routing.module';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventComponent,
    MembersComponent,
    FundComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EventModule,
    MemberModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
