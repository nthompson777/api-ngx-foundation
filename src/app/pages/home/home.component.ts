import { Component } from '@angular/core';
import { faCode } from '@fortawesome/pro-regular-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/pro-regular-svg-icons';
import { faTabletAlt } from '@fortawesome/pro-regular-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  faCode = faCode;
  faAngular = faAngular;
  faLaptopCode = faLaptopCode;
  faTabletAlt = faTabletAlt;

  constructor() {}
}
