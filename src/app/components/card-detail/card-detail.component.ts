import { Component, Input } from '@angular/core';
import { Constants } from '@constants/constants';
import { MediaType } from "@models/media-type.interface";
import { ClasePokemon } from '@models/pokemon.interface';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {

  @Input()
  public picture!:ClasePokemon;

  
  
}
