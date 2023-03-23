import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ConfigTheme } from 'src/app/utils/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  checked = false;
  configTheme: any;

  constructor(private overlay: OverlayContainer) {
    this.configTheme = new ConfigTheme(overlay);
  }
  ngOnInit(): void {
    this.configTheme.configTheme();
    this.checked = this.configTheme.getTheme() === 'light';
  }

  toggleChange(event: any) {
    this.configTheme.setTheme(event.checked ? 'light' : 'dark');
  }
}
