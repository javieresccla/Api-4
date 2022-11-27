import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { NasaApiService } from '@services/nasa-api.service';
import { NavigationService } from '@services/navigation.service';
import { Constants } from '@constants/constants';
import { ClasePokemon } from '@models/pokemon.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  private readonly today: Date = new Date();
  public picturesList: ClasePokemon[] = [];
  public CONST = Constants;

  constructor(private _nasaApiService: NasaApiService,
              private _navigationService: NavigationService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 /* ngOnInit(): void {
    this._nasaApiService.getFotos()
      .subscribe({
        next: (response: ClasePokemon[]) => {
          response.forEach((element: ClasePokemon) => {
            this.picturesList.unshift(element);
          });
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse.error.msg);
          this._navigationService.getErrorPage();
        }
      })
  }*/

}
