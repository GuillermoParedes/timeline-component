import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'timeline',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'timeline',
  //   loadChildren: () =>
  //     import('./timeline/timeline.module').then((m) => m.TimelineModule),
  //   data: {
  //     title: 'TimeLIne tutator',
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
