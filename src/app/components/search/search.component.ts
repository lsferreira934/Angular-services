import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm: string = '';
  pokemon: any;
  error: string | null = null;

  @Output() pokemonFound = new EventEmitter<any>();

  constructor(private pokemonService: PokemonService) {}

  searchPokemon() {
    this.error = null;
    this.pokemonService.getPokemon(this.searchTerm).subscribe({
      next: (res) =>
        this.pokemonFound.emit({
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        }),
      error: (err) => {
        console.error(err);
        this.error =
          'Ocorreu um erro ao buscar detalhes do Pokémon. Por favor, tente novamente.';
      },
    });
  }
}


