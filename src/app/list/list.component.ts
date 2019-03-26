import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListService } from './list.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users;
  filteredUsers;
  limit = 5;
  direction: number;
  isDesc = true;
  column;
  private searchTerms = new Subject<string>();

  constructor(private listService: ListService) {}

  @ViewChild('userForm') public userFrm: NgForm;

  displayUsers() {
    this.filteredUsers = Object.assign([], this.users);
  }

  setUsers(limit) {
    this.listService.getNames(limit).subscribe(res => {
      this.users = res;
      this.displayUsers();
    });
  }

  ngOnInit() {
    this.setUsers(this.limit);
  }

  searchUser(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    if (!searchTerm) {
      this.displayUsers();
    } else {
      this.filteredUsers = Object.assign([], this.users).filter(item => {
        return (
          item.name.toLowerCase().includes(searchTerm) ||
          item.surname.toLowerCase().includes(searchTerm) ||
          item.gender.toLowerCase().includes(searchTerm) ||
          item.region.toLowerCase().includes(searchTerm)
        );
      });
    }
  }

  onInputChange(val) {
    this.searchTerms.next(val);
    // this.searchUser(val);
  }

  loadMoreUser() {
    this.limit += 5;
    this.setUsers(this.limit);
  }

  sortUser(col) {
    this.isDesc = !this.isDesc;
    this.column = col;
    this.direction = this.isDesc ? 1 : -1;
  }
}
