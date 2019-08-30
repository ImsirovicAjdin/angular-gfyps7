import { Component } from '@angular/core';
 
@Component({
  selector: 'demo-pagination-page-changed-event',
  templateUrl: './pagination.component.html'
})
export class DemoPaginationPageChangedComponent {
  currentPage = 4;
  page: number;
 
  pageChanged(event: any): void {
    this.page = event.page;
  }
}
