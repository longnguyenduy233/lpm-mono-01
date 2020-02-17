import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <button mat-raised-button color="primary">
      core works!
    </button>
  `,
  styles: []
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
