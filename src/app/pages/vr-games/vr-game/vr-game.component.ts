import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VrGames } from 'src/app/utils/games';

@Component({
  selector: 'app-vr-game',
  templateUrl: './vr-game.component.html',
  styleUrls: ['./vr-game.component.css'],
})
export class VrGameComponent implements OnInit {
  gameData: any = [];
  vrGames = new VrGames();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameData = this.vrGames
      .getGames()
      .data.find((game) => game.id === Number(id));
  }
}
