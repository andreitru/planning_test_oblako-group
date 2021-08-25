import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  programOptions: any = [{id: 1, name: 'Все'}, {id: 2, name: 'Программа 1'}, {id: 3, name: 'Программа 2'}]
  selectedProgram = 1
  periodOptions: any = [{id: 1, name: 'Июнь 2019'}, {id: 2, name: 'Май 2019'}, {id: 3, name: 'Апрель 2019'}];
  selectedPeriod = 1
  statusOptions: any = [{id: 1, name: 'Все'}, {id: 2, name: 'Статус 1'}, {id: 3, name: 'Статус 2'}]
  selectedStatus = 1

  groupPlanningFilter = new FormGroup({
    search: new FormControl(''),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

}