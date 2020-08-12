import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PassportService} from '../passport.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private passwordService: PassportService,
    private message: NzMessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.passwordService.login(this.form.value.username, this.form.value.password).subscribe(
      (res) => {
        console.log(res);
        if (res.msg === 'true') {
          console.log(res.token);
          localStorage.setItem("token", res.token);
          this.message.create('success', "欢迎回来，"+this.form.value.username);
          this.router.navigateByUrl("");
        }
      },
      error => {
        console.log('password not match');
        this.message.create('error', "登录失败，请检查用户名或密码");
        this.form.value.password = "";
      }
    );
  }

  notfinished(): void {
    this.message.info('找回密码功能锐意制作中');
  }
}
