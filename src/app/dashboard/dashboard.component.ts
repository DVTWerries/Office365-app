import { Component } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private utilsService: UtilsService) { }

  menuIsActive:boolean;

  ngOnInit() {
    this.utilsService.currentMenuIsActive.subscribe(message => this.menuIsActive = message)
  }

}
