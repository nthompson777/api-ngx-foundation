import { Component, Input } from '@angular/core';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/pro-regular-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appName = 'ngx-foundation';
  list: any;
  selected: any;
  isOffcanvas = true;
  faGithubSquare = faGithubSquare;
  faTwitterSquare = faTwitterSquare;
  faAngleDoubleRight = faAngleDoubleRight;
  @Input() public hasSideNav: boolean;

  links: Array<{ path: string, text: string }> = [];

  // Main Nav Links Array
  constructor() {
    this.links.push(
      { path: 'accordion', text: 'Accordion' },
      { path: 'buttons', text: 'Buttons' },
      { path: 'callouts', text: 'Callouts' },
      { path: 'datepicker', text: 'Datepicker' },
      { path: 'dropdowns', text: 'Dropdowns' },
      { path: 'offcanvas', text: 'Off-Canvas' },
      { path: 'orbit', text: 'Orbit' },
      { path: 'pagination', text: 'Pagination' },
      { path: 'progressbar', text: 'Progressbar' },
      { path: 'rating', text: 'Rating' },
      { path: 'reveal', text: 'Reveal' },
      { path: 'sortable', text: 'Sortable' },
      { path: 'tabs', text: 'Tabs' },
      { path: 'timepicker', text: 'Timepicker' },
      { path: 'tooltip', text: 'Tooltip' },
      { path: 'typeahead', text: 'Typeahead' }
    );
  }
  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }
}
