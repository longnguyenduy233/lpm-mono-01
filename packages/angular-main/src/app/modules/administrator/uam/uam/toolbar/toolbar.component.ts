import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() searchCriteriaList: [];
  @Input() actionBtns?: [];
  @Input() formGroup?: FormGroup;
  @Output() searchEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onBtnSearchClick() {
    this.searchEmit.emit(this.formGroup);
  }
}
