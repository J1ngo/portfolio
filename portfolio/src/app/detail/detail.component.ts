import { Component, Input } from '@angular/core';

enum Pages {
    profile = 0,
    nanostring,
    lphi,
    cognitive,
    haPortal,
    haApp,
    fsr,
    dataphorWeb,
    jingoAI,
    other
}

@Component({
  selector: 'p-detail',
  template: `
  <p-nanostring *ngIf="page === _pages.nanostring" ></p-nanostring>
  <p-lphi *ngIf="page === _pages.lphi" ></p-lphi>
  <p-profile *ngIf="page === _pages.profile" ></p-profile>
  <p-cognitive *ngIf="page === _pages.cognitive" ></p-cognitive>
  <p-ha-portal *ngIf="page === _pages.haPortal" ></p-ha-portal>
  <p-ha-app *ngIf="page === _pages.haApp" ></p-ha-app>
  <p-fsr *ngIf="page === _pages.fsr" ></p-fsr>
  <p-dataphor-web *ngIf="page === _pages.dataphorWeb" ></p-dataphor-web>
  <p-jingo-ai *ngIf="page === _pages.jingoAI" ></p-jingo-ai>
  <p-other *ngIf="page === _pages.other" ></p-other>
  `,
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
    
    _pages = Pages;

    @Input() page: number;

}
