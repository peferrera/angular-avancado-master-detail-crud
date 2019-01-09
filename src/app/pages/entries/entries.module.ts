import { NgModule } from '@angular/core';
import { IMaskModule } from 'angular-imask';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntriesRoutingModule } from './entries-routing.module';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entries-list.component';


@NgModule({
  declarations: [
    EntryListComponent,
    EntryFormComponent
  ],
  imports: [
    EntriesRoutingModule,
    SharedModule,
    CalendarModule,
    IMaskModule
  ],
  exports: [
    EntryListComponent,
    EntryFormComponent
  ]
})
export class EntriesModule { }
