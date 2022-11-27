import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from '@constants/constants';

import { UtilsService } from '@services/utils.service';
import { ClasePokemon } from '@models/pokemon.interface';


@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private queryParams: HttpParams = new HttpParams();
  private readonly thumbValue: boolean = true;

  apiUrl = environment.API_URL;

  constructor( private _utils: UtilsService,
               private _http: HttpClient ) { }

  public getFotos(index:any){
    return this._http.get<any>(`${this.apiUrl}${index}`);
  }

   /*            
  public getPicturesList(date: Date, daysBefore: number): Observable<PictureDto[]> {
    const currentDate: string = this._utils.APIFormatDate(date, Constants.DATE_PATTERN);
    const beforeDate: string = this._utils.APIFormatDate(date, Constants.DATE_PATTERN, daysBefore);
    return this._http.get<PictureDto[]>(`${environment.API_URL}${Constants.APOD_ENDPOINT}`, 
                                          {params: this.queryParams
                                            .set(Constants.API_KEY, environment.API_KEY_VALUE)
                                            .set(Constants.Q_START_DATE, beforeDate)
                                            .set(Constants.Q_END_DATE, currentDate)
                                            .set(Constants.Q_THUMBS, this.thumbValue) 
                                          })
  }
*/
  public getPictureById( pictureDateId: string ): Observable<ClasePokemon> {
    return this._http.get<ClasePokemon>(`${environment.API_URL}${Constants.APOD_ENDPOINT}`, {});                          
  }
  
}
