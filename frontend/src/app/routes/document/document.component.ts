import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup} from '@angular/forms';

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

  form: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.content = 'initial value';
    this.form = this.fb.group({
      content: '由模版新建文档'
    });
  }

}
