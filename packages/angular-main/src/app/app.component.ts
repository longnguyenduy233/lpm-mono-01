import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-main';
  roleDetailForm = new FormGroup({
    drLimit: new FormControl(
      {
        value: '2000',
        disabled: false
      },
      Validators.compose([
        Validators.required
      ])
    )
  });
}
