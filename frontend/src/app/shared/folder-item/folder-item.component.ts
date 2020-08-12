import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent implements OnInit {
  @Input() public folderName: string;
  @Input() public folderId: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate(['/folder/' + this.folderId]).then();
  }

}
