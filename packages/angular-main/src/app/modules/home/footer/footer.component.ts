import { Component, OnInit } from '@angular/core';
import { config } from 'src/environments/version.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  conf = config;

  constructor() { }

  ngOnInit(): void {
  }

}
