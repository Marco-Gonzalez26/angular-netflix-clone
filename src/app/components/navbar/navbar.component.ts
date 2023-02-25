import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navItems = [
    { name: 'Home', href: '/' },
    { name: 'TV Shows', href: '/series' },
    { name: 'Movies', href: '/movies' },
    { name: 'New & Popular', href: '/latest' },
  ];
}
