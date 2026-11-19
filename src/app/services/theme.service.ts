import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'av_nfc_theme';
  readonly theme = signal<ThemeMode>('dark');

  constructor() {
    const saved = this.getSavedTheme();
    if (saved) {
      this.theme.set(saved);
    }

    effect(() => {
      const current = this.theme();
      const root = document.documentElement;

      if (current === 'dark') {
        root.classList.add('dark');
        this.updateMetaThemeColor('#121212');
      } else {
        root.classList.remove('dark');
        this.updateMetaThemeColor('#FAFAFA');
      }

      try {
        localStorage.setItem(this.STORAGE_KEY, current);
      } catch {
        // Ignore storage errors in private browsing
      }
    });
  }

  toggleTheme(): void {
    this.theme.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  private getSavedTheme(): ThemeMode | null {
    try {
      const value = localStorage.getItem(this.STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }

  private updateMetaThemeColor(color: string): void {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', color);
    }
  }
}
