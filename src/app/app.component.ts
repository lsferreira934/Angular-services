import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service';

  pokemonDetail: Pokemon | undefined;

  constructor() {}

  onPokemonFound(pokemon: any) {
    this.pokemonDetail = pokemon;
  }
}
