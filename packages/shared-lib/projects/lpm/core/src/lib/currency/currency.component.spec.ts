import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CurrencyComponent } from './currency.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CurrencyComponent);
      component = fixture.componentInstance;
      const testControl: NgControl = {
        name: 'testContol',
        valueAccessor: new FormGroup({ testContol: new FormControl('testValue') }).value,
        validator: Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
        asyncValidator: null,
        viewToModelUpdate() { },
        control: new FormControl('testValue'),
        value: new FormGroup({ testContol: new FormControl('testValue') }).value,
        valid: null,
        invalid: null,
        pending: null,
        disabled: null,
        enabled: null,
        errors: null,
        pristine: null,
        dirty: null,
        touched: null,
        status: null,
        untouched: null,
        statusChanges: null,
        valueChanges: null,
        path: null,
        reset: null,
        hasError(errorCode: string, path?: Array<string | number> | string): boolean { return true; },
        getError: null
      };
      component.ngControl = testControl;
      component.minLengthException = 8;
      component.maxLengthException = 8;
      component.maxLength = 8;
    });
  }));

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
