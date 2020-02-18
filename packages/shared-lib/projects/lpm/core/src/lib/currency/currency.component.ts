import { Component, Self, Input, Optional, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-custom-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements ControlValueAccessor {

  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() minLengthException?: number;
  @Input() maxLengthException?: number;
  @Input() exceptionChar?: string;
  @Input() placeHolder?: number;
  @Input() fieldName?: string;
  @Input() isRequired?: boolean;
  @Input() className?: boolean;
  @Input() isFirstLoad?: boolean;
  @Output() emitOnChange: EventEmitter<any> = new EventEmitter<any>();
  isFirstTime = false;

  typeInput = 'text';

  constructor(
    @Optional()
    @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // tslint:disable-next-line: variable-name
  public _value: string;
  onChange: (_: any) => void = (_: any) => { };

  writeValue(value?: any): void {
    setTimeout(() => {
      this._value = value.toString();
      if (value && this.isFirstLoad === true && !this.isFirstTime) {
        this.isFirstTime = true;
        this.onTouch();
      }
    });
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

  formatNumber(value: any) {
    value = value.toString();
    value = value.replace(/[^0-9\.]/g, '');
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');
    if (parts[1] && parts[1].length > 2) {
      parts[1] = parts[1].substring(0, 2);
    }
    if (parts[0] && parts[0].length > 17) {
      parts[0] = parts[0].substring(0, 17);
    }

    return parts.join('.');
  }

  onKeyPress(e: any) {
    const keycode = e.keyCode;
    const isTextInputKey =
      (keycode > 47 && keycode < 58) || // number keys
      keycode === 32 || keycode === 8 || // spacebar or backspace
      keycode === 37 || keycode === 39 || // left arrow && right arrow;
      keycode === 9 || // Tab key
      (keycode > 95 && keycode < 112) || // numpad keys
      (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
      (keycode > 218 && keycode < 223); // [\]' (in order)

    if (!isTextInputKey) {
      e.preventDefault();
    }
  }

  onKeyUp(e: any) {
    const newValue = e.target.value;
    const formatedValue = this.formatNumber(newValue);
    this.onChange(formatedValue);
    this.writeValue(formatedValue);
    const valSplit = e.target.value.split('.');
    if ((valSplit[0] && valSplit[0].length > 17) || (valSplit[1] && valSplit[1].length > 2)) {
      this.emitOnChange.emit(this._value);
    }
  }

  onTouch(event?: Event) {
    const valSplit = this._value.split('.');

    if (valSplit[1] === '00' && valSplit[0] !== '0') {
      this.onChange(valSplit[0]);
      this.writeValue(valSplit[0]);
    } else if (this._value === '0.00') {
      this.onChange('');
      this.writeValue('');
    } else if (this.isFirstLoad === true && valSplit.length === 2 ||
      this.isFirstLoad === true && valSplit[0] !== '') {
      const formatedValue = this.formatNumber(valSplit[0]);
      if (valSplit[1] && valSplit[1].length === 1) {
        this.onChange(formatedValue + '.' + valSplit[1] + '0');
        this.writeValue(formatedValue + '.' + valSplit[1] + '0');
      } else {
        this.onChange(formatedValue + '.' + (valSplit[1] || '00'));
        this.writeValue(formatedValue + '.' + (valSplit[1] || '00'));
      }
    }
  }

  onBlur(e: any) {
    const valSplit = this._value.split('.');
    // Cut all zero at the begin of string
    if (valSplit[0] !== '') {
      const numTemp = Number(valSplit[0].split(',').join('')).toString();
      valSplit[0] = numTemp.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');
    }
    if (valSplit && valSplit.length === 1) {
      if (valSplit[0] !== '') {
        this._value = valSplit[0] + '.00';
      } else {
        this._value = '';
      }
    } else if (valSplit && valSplit.length === 2) {
      if (valSplit[1] && valSplit[1].length === 1) {
        this._value = valSplit[0] + '.' + valSplit[1] + 0;
      } else if (valSplit[1].length === 0) {
        this._value = valSplit[0] + '.00';
      }
    }

    this.onChange(this._value);
    this.writeValue(this._value);
  }
}
