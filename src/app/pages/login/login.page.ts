import { show, hide } from './../../../store/actions/loading-action';
import { AppState } from './../../../store/state/app-state';
import { FormBuilder } from '@angular/forms';
import { LoginPageForm } from './login.page.form';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }
  login(){
this.router.navigate(['home']);
  }
  forgotEmailPassword(){
this.store.dispatch(show());
    setTimeout(() => {
      this.store.dispatch(hide())
    }, 3000);
  }
  register(){
this.router.navigate(['register'])
  }
}
