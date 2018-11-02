import { Component } from '@angular/core';


@Component({
  selector: 'app-getting-started',
	templateUrl: './getting-started.component.html',
})
export class GettingStartedComponent {

  isCollapsed = true;

  code =
`function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`;

  codeInstallNgx =
`yarn add ngx-foundation foundation-sites
  OR
npm install ngx-foundation foundation-sites --save`;

  codeInstallCDN =
`Foundation CSS:
<!-- index.html -->
<link rel="stylesheet" href="node_modules/foundation-sites/dist/css/foundation-sites.min.css">
Or CDN:
<link href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.0/dist/css/foundation.min.css" rel="stylesheet">

ngx-foundation CSS:
<!-- index.html -->
<link rel="stylesheet" href="node_modules/ngx-foundation/dist/css/ngx-foundation.min.css">
Or CDN:
<link href="https://cdn.jsdelivr.net/npm/ngx-foundation@1.0.6/dist/css/ngx-foundation.min.css" rel="stylesheet">`;

  codeInstallNgNew =
`ng new YOUR_PROJECT_NAME_HERE --style = scss`;

  ngxBaseStyles =
`// Import Foundation for Sites
// See https://foundation.zurb.com/sites/docs/sass.html for detailed info.
@import '~foundation-sites/scss/foundation';
  @include foundation-everything;

// Import Angular ngx-foundation Framework Added Styles
@import "~ngx-foundation/assets/scss/main";`;

codeInstallStarterKit =
`git clone https://github.com/nthompson777/ngx-foundation-starterkit`;

codeStylesNgx =
`// Import Variables, Foundation Core, and Custom App Styles
// --------------------------------------------------------

// Global Variable Overrides and Styles
@import './assets/scss/settings';

// Import Foundation for Sites
@import '~foundation-sites/scss/foundation';
  // ---- Global styles ----
  @include foundation-global-styles;
	@include foundation-forms;
	@include foundation-typography;

	// ---- Grids (choose one) ----
	@include foundation-xy-grid-classes;
	// @include foundation-grid;
	// @include foundation-flex-grid;

	// ---- Generic components ----
	@include foundation-button;
	@include foundation-button-group;
	@include foundation-close-button;
	// @include foundation-label;
	@include foundation-progress-bar;
	// @include foundation-slider;
	// @include foundation-switch;
	@include foundation-table;

	// ---- Basic components ----
	// @include foundation-badge;
	// @include foundation-breadcrumbs;
	@include foundation-callout;
	// @include foundation-card;
	@include foundation-dropdown;
	@include foundation-pagination;
	@include foundation-tooltip;

	// ---- Containers ----
	@include foundation-accordion;
	// @include foundation-media-object;
	@include foundation-orbit;
	// @include foundation-responsive-embed;
	@include foundation-tabs;
	// @include foundation-thumbnail;

	// ---- Menu-based containers ----
	@include foundation-menu;
	// @include foundation-menu-icon;
	@include foundation-accordion-menu;
	// @include foundation-drilldown-menu;
	@include foundation-dropdown-menu;

	// ---- Layout components ----
	@include foundation-off-canvas;
	@include foundation-reveal;
	// @include foundation-sticky;
	@include foundation-title-bar;
	@include foundation-top-bar;

	// ---- Helpers ----
	@include foundation-float-classes;
	// @include foundation-flex-classes;
	@include foundation-visibility-classes;
	// @include foundation-prototype-classes;

// Motion UI Sass Library
 @import '~motion-ui/src/motion-ui';
	@include motion-ui-transitions;
	@include motion-ui-animations; 

// Import Angular ngx-foundation Framework Added Styles 
@import "~ngx-foundation/assets/scss/main";

// Global Overrides & Added Styles
@import './assets/scss/global';`;

ngxComponents =
`import { AlertModule } from 'ngx-foundation';
...

@NgModule({
  ...
  imports: [
    AlertModule.forRoot(),
    ...
  ],
  ...
})`;

codeModuleList =
`import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';`;

codeInstall04 =
`git clone https://github.com/nthompson777/ngx-foundation-starterkit`;

ngxComponentHTML =
`<alert type="success">hello</alert>`;

  constructor() { }
}
