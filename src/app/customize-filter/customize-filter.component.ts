import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customize-filter',
  templateUrl: './customize-filter.component.html',
  styleUrls: ['./customize-filter.component.scss']
})
export class CustomizeFilterComponent implements OnInit {
  @Input() options: any

  showMenu(el: any) {
    el.stopPropagation()
    if (el.target.nextElementSibling.style.display == 'none') {
      el.target.nextElementSibling.style.display = 'block';
    } else {
      el.target.nextElementSibling.style.display = 'none'
    }
  }

  hideMenu(el: any) {
    el.target.parentElement.style.display = 'none';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
