import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uam-user-setup',
  templateUrl: './uam-user-setup.component.html',
  styleUrls: ['./uam-user-setup.component.scss']
})
export class UamUserSetupComponent implements OnInit {
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
      action: this.addUserSetup
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
  users = [
    {
      userName: 'Wasan Khangmontree',
      userId: '963552',
    },
    {
      userName: 'Hipter Chitabapum',
      userId: '963551',
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

  addUserSetup() {
    console.log('add data');
  }

  onClickListItem(item) {
    console.log(item);
  }
}
