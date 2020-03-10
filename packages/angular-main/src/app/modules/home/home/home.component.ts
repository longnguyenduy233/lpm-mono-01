import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/authentication/auth.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  getUserById() {
    this.authService.getUserById(1234).pipe(take(1)).subscribe( (rs: any) => {
      this.data = rs.msg;
    });
  }
}
