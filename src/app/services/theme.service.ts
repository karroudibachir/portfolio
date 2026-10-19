import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  public currentTheme = signal<Theme>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('app-theme') as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        this.currentTheme.set(savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        this.currentTheme.set('light');
      }

      this.applyTheme(this.currentTheme());

      effect(() => {
        const theme = this.currentTheme();
        this.applyTheme(theme);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('app-theme', theme);
        }
      });
    }
  }

  public toggleTheme(): void {
    this.currentTheme.update((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  private applyTheme(theme: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
}
