import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  @Output()
  inputChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  searchUser(val: string) {
    this.inputChange.emit(val);
  }
}
