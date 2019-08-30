import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoModalStaticComponent } from './modals/modals.component.ts';
import { DemoPaginationPageChangedComponent } from './pagination/pagination.component.ts';
import { DemoPopoverDynamicComponent } from './popover/popover.component.ts';
import { DemoProgressbarDynamicComponent } from './progressbar/progressbar.component.ts';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  declarations: [ AppComponent, HelloComponent, DemoModalStaticComponent,
    DemoPaginationPageChangedComponent, DemoPopoverDynamicComponent, DemoProgressbarDynamicComponent
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
