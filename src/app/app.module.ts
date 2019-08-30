import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoModalStaticComponent } from './modals/modals.component.ts';
import { DemoPaginationPageChangedComponent } from './pagination/pagination.component.ts';


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [ AppComponent, HelloComponent, DemoModalStaticComponent,
    DemoPaginationPageChangedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
