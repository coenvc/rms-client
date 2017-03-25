import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { SearchPipePipe } from '../pipes/search-pipe.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { PotentialFormComponent } from './potential-form/potential-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberCardComponent,
    SearchPipePipe,
    FilterPipe,
    PotentialFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
