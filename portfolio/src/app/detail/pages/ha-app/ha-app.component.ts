import { Component } from '@angular/core';

enum pages {
    home = 0,
    messaging
}

@Component({
  selector: 'p-ha-app',
  templateUrl: './ha-app.component.html'
})
export class HAAppComponent {
  page: number = pages.home;

  select(num: number) {
    if (this.page !== num) {
      this.page = num;
    }
  }

  isSelected(num: number): boolean {
    return this.page === num;
  }
}