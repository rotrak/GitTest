import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private reqService: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  public login() {
    if (this.form.valid) {
      this.reqService.setLoading(true)
      this.authService.login(this.form.get('username').value, this.form.get('password').value).subscribe(resp => {
        this.reqService.setLoading(false);
        this.authService.startSession();
        this.router.navigate(['/home']);
      }, (error) => {
        this.errorLogin = true;
        this.reqService.setLoading(false);
      })
    }
  }

  public loadForm(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)] ],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
}
