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
  public pwd_consist: boolean;
  public uname_valid: boolean;

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
    this.passwordService.register(null, null).subscribe(
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

  checkUnameValid(): void {
    this.passwordService.checkUsernameValid(this.form.value.username).subscribe(
      (res) => {
        if (res.res === 'true') {
          this.uname_valid = true;
        }
        else {
          this.uname_valid = false;
        }
      }
    )
  }

  checkPwdConsist(event: any): void {
    if (this.form.value.password === this.form.value.pwd_confirm && this.form.value.password !== "") {
      this.pwd_consist = true;
    }
    else {
      this.pwd_consist = false;
    }
  }

}
