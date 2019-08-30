import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoModalStaticComponent } from './modals/modals.component.ts';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ModalModule.forRoot() 
  ],
  declarations: [ AppComponent, HelloComponent, DemoModalStaticComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
