import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './shared/layout/home-layout/home-layout.component';
import { SubpageLayoutComponent } from './shared/layout/subpage-layout/subpage-layout.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  // Home Page route with unique layout
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]
  },
  // Subpage routes with sidenav layout
  {
    path: '',
    component: SubpageLayoutComponent,
    children: [
      { path: 'getting-started',
        loadChildren: './pages/getting-started/getting-started.module#GettingStartedModule'
      },
      { path: 'components/accordion',
        loadChildren: './pages/components/accordion/accordion-comp/accordion-comp.module#AccordionCompModule'
      },
      { path: 'components/buttons',
        loadChildren: './pages/components/buttons/buttons-comp/buttons-comp.module#ButtonsCompModule'
      },
      { path: 'components/callouts',
        loadChildren: './pages/components/callouts/callouts-comp/callouts-comp.module#CalloutsCompModule'
      },
      { path: 'components/datepicker',
        loadChildren: './pages/components/datepicker/datepicker-comp/datepicker-comp.module#DatepickerCompModule'
      },
      { path: 'components/dropdowns',
        loadChildren: './pages/components/dropdowns/dropdowns-comp/dropdowns-comp.module#DropdownsCompModule'
      },
      { path: 'components/offcanvas',
        loadChildren: './pages/components/offcanvas/offcanvas-comp/offcanvas-comp.module#OffcanvasCompModule'
      },
      { path: 'components/orbit',
        loadChildren: './pages/components/orbit/orbit-comp/orbit-comp.module#OrbitCompModule'
      },
      { path: 'components/pagination',
        loadChildren: './pages/components/pagination/pagination-comp/pagination-comp.module#PaginationCompModule'
      },
      { path: 'components/progressbar',
        loadChildren: './pages/components/progressbar/progressbar-comp/progressbar-comp.module#ProgressbarCompModule'
      },
      { path: 'components/rating',
        loadChildren: './pages/components/rating/rating-comp/rating-comp.module#RatingCompModule'
      },
      { path: 'components/reveal',
        loadChildren: './pages/components/reveal/reveal-comp/reveal-comp.module#RevealCompModule'
      },
      { path: 'components/sortable',
        loadChildren: './pages/components/sortable/sortable-comp/sortable-comp.module#SortableCompModule'
      },
      { path: 'components/tabs',
        loadChildren: './pages/components/tabs/tabs-comp/tabs-comp.module#TabsCompModule'
      },
      { path: 'components/timepicker',
        loadChildren: './pages/components/timepicker/timepicker-comp/timepicker-comp.module#TimepickerCompModule'
      },
      { path: 'components/tooltip',
        loadChildren: './pages/components/tooltip/tooltip-comp/tooltip-comp.module#TooltipCompModule'
      },
      { path: 'components/typeahead',
        loadChildren: './pages/components/typeahead/typeahead-comp/typeahead-comp.module#TypeaheadCompModule'
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
