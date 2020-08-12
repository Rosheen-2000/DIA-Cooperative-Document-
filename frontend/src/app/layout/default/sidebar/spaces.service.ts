import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacesService {
  public spaces: { spaceId: string, spaceName: string }[] = [];

  constructor() {
  }

  public getSpaces() {
    this.spaces = [
      {spaceId: '1', spaceName: '团队1'},
      {spaceId: '2', spaceName: '团队2'},
      {spaceId: '3', spaceName: '团队3'}
    ];
  }
}
