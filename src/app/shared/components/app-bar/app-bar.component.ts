import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {


  @Input()
  addBtn: boolean;

  constructor() { }
}
