import { Component } from '@angular/core';

enum pages {
    triage = 0,
    messaging,
    connection,
    clinics
}

@Component({
  selector: 'p-ha-portal',
  templateUrl: './ha-portal.component.html'
})
export class HAPortalComponent {
  page: number = pages.triage;

  select(num: number) {
    if (this.page !== num) {
      this.page = num;
    }
  }

  isSelected(num: number): boolean {
    return this.page === num;
  }
}