import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  usernameError: string | undefined;
  passwordError: string | undefined;

  constructor(private router: Router) {}

  getUserName(val: string) {
    this.username = val;
    if (val === '') {
      this.usernameError = 'Required*';
    } else this.usernameError = '';
  }
  getPassword(val: string) {
    this.password = val;
    if (val === '') {
      this.passwordError = 'Required*';
    } else this.passwordError = '';
  }
  submit() {
    if (!this.username || this.username === '') {
      this.usernameError = 'Required*';
    }
    if (!this.password || this.password === '') {
      this.passwordError = 'Required*';
    }
    if (
      this.username &&
      this.password &&
      this.username !== '' &&
      this.password !== ''
    ) {
      localStorage.setItem('username', this.username);
      this.router.navigateByUrl('/dashboard');
    }
  }
  ngOnInit(): void {}
}
