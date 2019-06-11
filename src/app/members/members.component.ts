import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  selectedUser: User;
  members: User[] = [
    new User(48748988, 'Manowara Choudhary', new Date(), `HomeTown: WestBengal.Hobby: Reading Books,Trekking`, 'assets/users/mcc.jpg'),
    new User(45648984, 'Shiraz Syed', new Date(), `HomeTown: Guwahati.Hobby: Trekking`, 'assets/users/men.jpg'),
    new User(48748984, 'Srujan Bingi', new Date(), 'HomeTown: Hyderabad Hobby: Music,Telugu Cinemas', 'assets/users/bingi.jpg'),
    new User(48748981, 'Shubham Singh', new Date(), 'HomeTown: Varanasi Hobby: Politics,Cricket', 'assets/users/men.jpg'),
    new User(48748985, 'Sophie Siddiqui', new Date(), 'HomeTown: Bareli Hobby: Music,Bollywood', 'assets/users/women.jpg'),
    new User(48748987, 'Ankit Aggarwal', new Date(), 'HomeTown: Jind Hobby: Music', 'assets/users/ankit.jpg'),
    new User(45645412, 'Suhel Ahmed', new Date(), 'HomeTown: Jaipur Hobby: UFC, Martial Arts,NBA', 'assets/users/men.jpg'),
    new User(48748989, 'Pankaj Jha', new Date(), 'HomeTown: Darbhanga Hobby: Teaching', 'assets/users/men.jpg'),
    new User(48748990, 'Shiv Kumar', new Date(), 'HomeTown: Kanpur Hobby: Singing', 'assets/users/shiv.jpg'),
  ];
  constructor() { }
  ngOnInit() {
  }
  onSelect(user: User) {
    this.selectedUser = user;
    // alert('User Selected ' + this.selectedUser.name + '  ' + this.selectedUser.dob + '  ' + this.selectedUser.about);
  }

}
