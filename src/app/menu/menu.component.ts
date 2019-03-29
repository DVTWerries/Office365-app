import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private menuActive: boolean;

  constructor() { }

  ngOnInit() {
    this.openMenu();
  }

  openMenu() {
    this.menuActive = true;
  }

  closeMenu() {
    this.menuActive = false;
  }
}
