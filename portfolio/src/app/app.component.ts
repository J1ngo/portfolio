import { Component } from '@angular/core';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page: number = Pages.profile;

  Pages = Pages;

  select(num: number) {
    if (this.page !== num) {
      this.page = num;
    }
  }

  isSelected(num: number): boolean {
    return this.page === num;
  }

}
