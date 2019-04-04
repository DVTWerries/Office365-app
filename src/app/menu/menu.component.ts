import { Component, OnInit } from '@angular/core';
import { MatIconRegistry} from '@angular/material';
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
      'thumbs-up',
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
