import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL: string = '';
  private pokemon: Pokemon | any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(PokemonName: string): Observable<Pokemon> {
    this.pokemon = this.http.get<Pokemon>(`${this.baseURL}${PokemonName}`);
    return this.pokemon;
  }
}
