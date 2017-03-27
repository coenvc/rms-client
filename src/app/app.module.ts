import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { SearchPipePipe } from '../pipes/search-pipe.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { PotentialFormComponent } from './potential-form/potential-form.component';
import { LoginFormComponent } from './login-form/login-form.component'

import { LoginService } from './login.service'

@NgModule({
  declarations: [
    AppComponent,
    MemberCardComponent,
    SearchPipePipe,
    FilterPipe,
    PotentialFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
