import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private router = inject(Router);

  isSidebarCollapsed = true;
  isDropdownmenuOpen = false;
  activeSubmenu: string | null = null;

  ngOnInit() {
    // Automatikus figyelő: ha a navigáció véget ér, csukjuk a menüt
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeSidebarOnNav();
    });
  }

  // Hamburger gombhoz (Mobil)
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    if (this.isSidebarCollapsed) {
      this.isDropdownmenuOpen = false;
      this.activeSubmenu = null;
    }
  }

  // Sidebar Menu gombhoz (Desktop + Mobil)
  toggleDropdown() {
    if (this.isSidebarCollapsed) {
      // Ha zárva volt, kinyitjuk a sávot és a menüt is
      this.isSidebarCollapsed = false;
      this.isDropdownmenuOpen = true;
    } else {
      // Ha nyitva volt, kapcsoljuk a menüt
      this.isDropdownmenuOpen = !this.isDropdownmenuOpen;
      // Ha most zártuk be a menüt, csukjuk vissza a sávot is ikon módba
      if (!this.isDropdownmenuOpen) {
        this.isSidebarCollapsed = true;
        this.activeSubmenu = null;
      }
    }
  }

  // Almenük váltása (Mobil)
  toggleSubmenu(menu: string, event: Event) {
    if (window.innerWidth <= 767) {
      event.preventDefault();
      event.stopPropagation();
      this.activeSubmenu = this.activeSubmenu === menu ? null : menu;
    }
  }

  // Automatikus bezárás navigáció után
  closeSidebarOnNav() {
    this.isSidebarCollapsed = true;
    this.isDropdownmenuOpen = false;
    this.activeSubmenu = null;
  }
}