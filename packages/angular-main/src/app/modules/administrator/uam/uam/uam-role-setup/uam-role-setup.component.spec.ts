import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UamRoleSetupComponent } from './uam-role-setup.component';

describe('UamRoleSetupComponent', () => {
  let component: UamRoleSetupComponent;
  let fixture: ComponentFixture<UamRoleSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UamRoleSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UamRoleSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
