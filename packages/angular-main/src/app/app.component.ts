import { Component, HostBinding, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Observable, of } from 'rxjs';
import { AuthService } from './core/authentication/auth.service';
import { take } from 'rxjs/operators';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-main';
  isLoggedIn: Observable<boolean>;
  idleState = 'Not started.';
  timedOut = false;

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;

  constructor(public overlayContainer: OverlayContainer, public authService: AuthService, private idle: Idle) {
    this.isLoggedIn = this.authService.getUserLoggedIn();
    // sets an idle timeout of 900 seconds, for testing purposes.
    idle.setIdle(120);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
      console.log(this.idleState);
    });
    idle.onTimeout.subscribe(() => {
      // this.childModal.hide();
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      // this.authService.logout().pipe(take(1)).subscribe();
    });
    idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!';
      console.log(this.idleState);
      this.childModal.show();
    });
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';
      console.log(this.idleState);
    });
    this.authService.getUserLoggedIn().subscribe(rs => {
      if (rs) {
        idle.watch();
        this.timedOut = false;
      } else {
        idle.stop();
      }
    });
  }
  @HostBinding('class') componentCssClass;
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    if (this.authService.isLoggedIn) {
      this.authService.doLogoutUser();
    }
    return;
  }

  onSetTheme(theme) {
    if (this.overlayContainer.getContainerElement().classList.contains('default-theme')) {
      this.overlayContainer.getContainerElement().classList.remove('default-theme');
    }
    if (this.overlayContainer.getContainerElement().classList.contains('dark-theme')) {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
    if (this.overlayContainer.getContainerElement().classList.contains('light-theme')) {
      this.overlayContainer.getContainerElement().classList.remove('light-theme');
    }
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  logout() {
    this.childModal.hide();
    this.authService.logout().pipe(take(1)).subscribe();
  }
}
