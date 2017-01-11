import { Component } from '@angular/core';

enum pages {
    profile = 0,
    cognitive,
    haPortal,
    haApp,
    fsr,
    dataphorWeb,
    jingoAI,
    other
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page: number = pages.profile;

  select(num: number) {
    if (this.page !== num) {
      this.page = num;
    }
  }

  isSelected(num: number): boolean {
    return this.page === num;
  }

}
