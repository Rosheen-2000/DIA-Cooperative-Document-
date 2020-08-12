import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PassportService} from '../passport.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private passwordService: PassportService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
      pwd_confirm: ''
    });
  }

  // TODO 注册功能补全
  onSubmit(): void {
    console.log(this.form.value);
    // this.passwordService.register().subscribe(
    //   (res) => {
    //     if (res.msg === 'true') {
    //       console.log(res.token);
    //     }
    //   },
    //   error => {
    //     console.log('password not match');
    //   }
    // );
  }

}
