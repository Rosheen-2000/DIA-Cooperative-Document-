import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PassportService} from '../passport.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private passwordService: PassportService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.passwordService.login(null, null).subscribe(
      (res) => {
        if (res.msg === 'true') {
          console.log(res.token);
        }
      },
      error => {
        console.log('password not match');
      }
    );
  }
}
