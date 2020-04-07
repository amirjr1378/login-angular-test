import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  fd: FormGroup;
  private _loading: boolean = false;

  ngOnInit(): void {
    this.fd = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(data): void {
    // if we have error we shouldnt proceed
    if (this.fd.invalid) {
      return;
    }
    // set the loading
    this._loading = true;

    // fetch data using http service then turn loading false

    console.log('data', this.fd);
  }

  get username() {
    return this.fd.get('username');
  }

  get password() {
    return this.fd.get('password');
  }
}
