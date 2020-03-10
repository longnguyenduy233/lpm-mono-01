import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { config } from 'src/environments/version.constant';
import { AuthService } from '@app/core/authentication/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @Output() public themeToggle = new EventEmitter();
  public header = config.systemName;
  navItems: NavItem[] = NavItems;
  themeRadioChecked = 'default-theme';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.authService.logout().pipe(take(1)).subscribe();
  }

  onThemeValueChange(event) {
    this.themeRadioChecked = event;
    this.themeToggle.emit(event);
  }

}

export interface NavItem {
  id: string;
  displayName: string;
  disabled: boolean;
  route?: string;
  children?: NavItem[];
}

export const NavItems: NavItem[] = [
  {
    id: 'M001',
    displayName: 'FINANCIAL',
    disabled: false,
    route: '',
    children: []
  },
  {
    id: 'M002',
    displayName: 'CHEQUE HANDLING',
    disabled: false,
    route: '',
    children: []
  },
  {
    id: 'M003',
    displayName: 'ADMINISTRATOR',
    disabled: false,
    route: 'uam',
    children: []
  }
];

