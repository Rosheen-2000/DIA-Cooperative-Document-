import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor() { }

  public getDocument(docId: string): { Title: string, Content: string } {
    return {
      Title: docId + 'Title',
      Content: '<h1>标题一</h1>'
    };
  }
}
