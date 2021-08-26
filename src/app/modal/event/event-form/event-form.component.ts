import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  trainersOptions = [{id: 1, name: 'Сергей Ефремов'}, {id: 2, name: 'Иван Петров'}, {id: 3, name: 'Петр Иванов'}]
  placeholder = 'Тренер'

  dateConfig = {
    locale: 'ru',
    format: 'DD MMMM',
    showGoToCurrent: false,
  }
  selectedDate = '';
  timeConfig = {
    locale: 'ru',
    format: 'HH:mm',
    showTwentyFourHours: true
  }

  isDateSelected = false
  isTimeSelected = false
  isTrainerSelected = false

  constructor() { }

  ngOnInit(): void {
  }

}
