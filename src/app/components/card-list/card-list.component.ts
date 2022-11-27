import { Component, Input } from '@angular/core';
import { Constants } from '@constants/constants';
import { NasaApiService } from '@services/nasa-api.service';
import { MediaType } from "@models/media-type.interface";
import { ClasePokemon } from '@models/pokemon.interface';

@Component({
  selector: 'app-card-picture',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input('pictureData')
  public picture!:ClasePokemon;

  getPokemons(){
    let pokemondata;
    for(let i=1;i<6;i++){
      
    }
  }
  
}
