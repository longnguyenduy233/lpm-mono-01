import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uam-role-setup',
  templateUrl: './uam-role-setup.component.html',
  styleUrls: ['./uam-role-setup.component.scss']
})
export class UamRoleSetupComponent implements OnInit {
  searchCriteriaList = [
    {
      placeholder: 'Role Id',
      formControlName: 'roleId'
    },
    {
      placeholder: 'Role Name',
      formControlName: 'roleName'
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
      roleId: [''],
      roleName: ['']
    });
  }

  ngOnInit(): void {
  }

  onBtnSearchClick(event) {
    console.log(event);
  }

}
