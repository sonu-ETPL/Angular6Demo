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
    new User(48748988, 'Manowara Choudhary', new Date(), `WestBengal`, 'assets/users/mcc.jpg', 'Reading Books,Trekking,Teaching'),
    new User(45648984, 'Shiraz Syed', new Date(), `Guwahati(Assam)`, 'assets/users/men.jpg', 'Trekking'),
    new User(48748984, 'Srujan Bingi', new Date(), 'Hyderabad(Telangana)', 'assets/users/bingi.jpg', 'Music,Movies'),
    new User(48748981, 'Shubham Singh', new Date(), 'Varanasi(UP)', 'assets/users/men.jpg', 'Politics,Cricket'),
    new User(48748985, 'Sophie Siddiqui', new Date(), 'Bareli(UP)', 'assets/users/women.jpg', 'Music,Movies'),
    new User(48748987, 'Ankit Aggarwal', new Date(), 'Jind(Haryana)', 'assets/users/ankit.jpg', 'Trekking,Music'),
    new User(45645412, 'Suhel Ahmed', new Date(), 'Kota(Rajasthan)', 'assets/users/men.jpg', 'NBA,UFC, MMA'),
    new User(48748989, 'Pankaj Jha', new Date(), 'Darbhanga(Bihar)', 'assets/users/men.jpg', 'Teaching,Coding'),
    new User(48748990, 'Shiv Kumar', new Date(), 'Kanpur(UP)', 'assets/users/shiv.jpg', 'Singing'),
    new User(48748789, 'Atmananda B C', new Date(), 'Mandya(Karnataka)', 'assets/users/men.jpg', 'Teaching,Coding'),
  ];
  constructor() { }
  ngOnInit() {
  }
  onSelect(user: User) {
    this.selectedUser = user;
    // alert('User Selected ' + this.selectedUser.name + '  ' + this.selectedUser.dob + '  ' + this.selectedUser.about);
  }

}
