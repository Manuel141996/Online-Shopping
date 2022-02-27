import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
