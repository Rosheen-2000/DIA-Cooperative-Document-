import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FolderService} from './folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  @Input() isRoot: boolean;
  @Input() rootName: string;

  private folderId: string;
  public subFolders: {Id: string, Name: string}[];
  public subFiles: {Id: string, Name: string}[];
  public path: {Id: string, Name: string}[];
  constructor(
    private route: ActivatedRoute,
    private folderService: FolderService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.folderId = params.id;
      this.subFolders = this.folderService.getSubFolders();
      this.subFiles = this.folderService.getFiles();
      this.path = this.folderService.getFolderPath();
    });
  }

}
