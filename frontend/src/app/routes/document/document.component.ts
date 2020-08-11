import {Component, OnInit} from '@angular/core';
import {Form, FormControl} from '@angular/forms';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  config = {
    height: 500,
    menubar: false,
    branding: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor',
    base_url: '/tinymce',
    suffix: '.min'
  };

  content: string;

  form: FormControl;
  constructor() {
  }

  ngOnInit(): void {
    this.content = 'initial value';
    this.form = new FormControl();
  }

}
