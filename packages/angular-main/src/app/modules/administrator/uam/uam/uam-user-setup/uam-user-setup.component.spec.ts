import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UamUserSetupComponent } from './uam-user-setup.component';

describe('UamUserSetupComponent', () => {
  let component: UamUserSetupComponent;
  let fixture: ComponentFixture<UamUserSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UamUserSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UamUserSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
