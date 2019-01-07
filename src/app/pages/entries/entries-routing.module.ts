import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './entry-list/entries-list.component';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent
  }
  {
    path: 'new',
    component: EntryListComponent
  },
  {
    path: ':id/edit',
    component: EntryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
