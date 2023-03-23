import { Component, OnInit } from '@angular/core';
import { VrGames } from 'src/app/utils/games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games = new VrGames();
  gamesData: any = [];

  ngOnInit(): void {
    this.gamesData = this.games.getGames();
  }
}
