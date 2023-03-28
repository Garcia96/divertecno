import { Component, OnInit } from '@angular/core';
import { VrGames } from 'src/app/utils/games';

@Component({
  selector: 'app-vr-games',
  templateUrl: './vr-games.component.html',
  styleUrls: ['./vr-games.component.scss'],
})
export class VrGamesComponent implements OnInit {
  panelOpenState = false;
  gamesData: any = [];
  vrGames = new VrGames();
  constructor() {}

  ngOnInit(): void {
    this.gamesData = this.vrGames.getGames();
  }
}
