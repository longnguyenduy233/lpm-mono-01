import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
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
