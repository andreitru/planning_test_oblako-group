import {Component, OnInit} from '@angular/core';
import {SESSIONS} from "../sessions";

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent implements OnInit {
  sessions = SESSIONS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
