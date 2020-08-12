import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getSubFolders(): { Id: string, Name: string }[] {
    return [
      {Id: 'Folder1', Name: 'Folder1'},
      {Id: 'Folder2', Name: 'Folder2'}
    ];
  }

  public getFiles(): { Id: string, Name: string }[] {
    return [
      {Id: 'File1', Name: 'File1'},
      {Id: 'File2', Name: 'File2'}
    ];
  }

  public getFolderPath(): { Id: string, Name: string }[] {
    return [
      {Id: '', Name: '我的桌面'},
      {Id: 'xxx', Name: 'xxx'},
      {Id: '', Name: '当前文件夹'}
    ];
  }
}
