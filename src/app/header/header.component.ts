import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  title : string;

  constructor(private utilsService: UtilsService ,private route: ActivatedRoute) {}

  ngOnInit() {
    this.getUrl();
  }

  getUrl() {
   this.utilsService.currentTitle.subscribe(title => {
     this.title = title
   });
  }

}
