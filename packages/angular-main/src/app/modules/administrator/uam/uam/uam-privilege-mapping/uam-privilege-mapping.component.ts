import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uam-privilege-mapping',
  templateUrl: './uam-privilege-mapping.component.html',
  styleUrls: ['./uam-privilege-mapping.component.scss']
})
export class UamPrivilegeMappingComponent implements OnInit {
  searchCriteriaList = [
    {
      placeholder: 'User Id',
      formControlName: 'userId'
    },
    {
      placeholder: 'Name',
      formControlName: 'name'
    },
    {
      placeholder: 'Hub Id',
      formControlName: 'hubId'
    }
  ];
  actionBtns = [
    {
      text: 'Add',
      icon: 'add',
      color: 'primary',
      action: ''
    },
    {
      text: 'Edit',
      icon: 'edit',
      color: 'accent',
      action: ''
    },
    {
      text: 'Delete',
      icon: 'clear',
      color: 'warn',
      action: ''
    }
  ];
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      userId: [''],
      name: [''],
      hubId: ['']
    });
  }

  ngOnInit(): void {
  }

  onBtnSearchClick(event) {
    console.log(event);
  }

}
