import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() currentUser: User;
  constructor() { }

  ngOnInit() {
  }

}
