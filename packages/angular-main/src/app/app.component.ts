import { Component, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

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

  constructor(public overlayContainer: OverlayContainer){}
  @HostBinding('class') componentCssClass;

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
