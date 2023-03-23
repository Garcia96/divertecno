import { OverlayContainer } from '@angular/cdk/overlay';

export class ConfigTheme {
  theme = '';
  constructor(private overlay: OverlayContainer) {}

  private getMatchMediaTheme() {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const userPrefersLight =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches;

    return [userPrefersDark, userPrefersLight];
  }

  private setMatchMediaTheme() {
    const [userPrefersDark, userPrefersLight] = this.getMatchMediaTheme();

    if (userPrefersDark) {
      this.setTheme('dark');
    }
    if (userPrefersLight) {
      this.setTheme('light');
    }
  }

  public configTheme() {
    const localTheme = localStorage.getItem('theme');
    if (localTheme && (localTheme === 'dark' || localTheme === 'light')) {
      this.setTheme(localTheme);
    } else {
      this.setMatchMediaTheme();
    }
  }

  public setTheme(themeName: string) {
    document.documentElement.className = themeName;
    localStorage.setItem('theme', themeName);
    this.theme = themeName;

    if (this.theme === 'dark') {
      this.overlay.getContainerElement().classList.add('dark');
    } else {
      this.overlay.getContainerElement().classList.remove('dark');
    }
  }

  public getTheme() {
    return this.theme;
  }
}
