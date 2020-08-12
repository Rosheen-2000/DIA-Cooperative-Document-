import { Component, OnInit } from '@angular/core';
import {SpacesService} from './spaces.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public spacesService: SpacesService
  ) { }

  ngOnInit(): void {
    this.spacesService.getSpaces();
  }

}
