import { Component, OnInit, isDevMode } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private isActive: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private utilsService: UtilsService) {
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
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-menu-24px.svg'));
  }

  ngOnInit() {
    this.utilsService.currentMenuIsActive.subscribe(message => this.isActive = message)
  }

  menuToggler() {
    if(this.isActive) {
      this.utilsService.setMenuState(false);
    }
    else{
      this.utilsService.setMenuState(true);
    }
  }
}
