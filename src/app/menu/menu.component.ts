import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private menuActive: boolean;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'person',
      sanitizer.bypassSecurityTrustResourceUrl('assets/outline-person-24px.svg'));
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/outline-home-24px.svg'));
    iconRegistry.addSvgIcon(
      'contacts',
      sanitizer.bypassSecurityTrustResourceUrl('assets/outline-contacts-24px.svg'));
    iconRegistry.addSvgIcon(
      'notes',
      sanitizer.bypassSecurityTrustResourceUrl('assets/outline-notes-24px.svg'));
    iconRegistry.addSvgIcon(
      'tasks',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-timer-24px.svg'));
    iconRegistry.addSvgIcon(
      'menu-burger',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }

  ngOnInit() {
    this.openMenu();
  }

  openMenu() {
    this.menuActive = true;
  }

  closeMenu() {
    console.log("hello");
    this.menuActive = false;
  }
}
