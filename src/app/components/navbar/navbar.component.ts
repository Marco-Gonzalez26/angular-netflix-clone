import { Component, OnInit, OnChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .active {
        background: rgb(0, 0, 0);

        background: -moz-linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 5%,
          rgba(25, 25, 25, 1) 100%
        );
        background: -webkit-linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 5%,
          rgba(25, 25, 25, 1) 100%
        );
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 5%,
          rgba(25, 25, 25, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#191919",GradientType=1);
      }
    `,
  ],
})
export class NavbarComponent {
  navItems = [
    { name: 'Home', href: '/' },
    { name: 'TV Shows', href: '/series' },
    { name: 'Movies', href: '/movies' },
    { name: 'New & Popular', href: '/latest' },
  ];
  isScrolled = false;

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }
}
