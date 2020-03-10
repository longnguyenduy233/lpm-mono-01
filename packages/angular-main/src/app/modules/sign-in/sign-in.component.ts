import { Component, OnInit } from '@angular/core';
import { config } from '@environments/version.constant';
import { environment } from '@environments/environment';
import { AuthService } from '@app/core/authentication/auth.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  conf = config;
  isDev = !environment.production;
  header = config.systemName;

  username = 'user1';
  password = '1';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmitLoginForm() {
    this.authService.login({username: this.username, password: this.password}).pipe(take(1)).subscribe( rs => {
      if (rs) {
        this.router.navigate(['/home']);
      }
    });
  }

}
