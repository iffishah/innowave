import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShowslistService {
  private BASE_URL= 'http://api.tvmaze.com';
  constructor(private _http:HttpClient) { }


  getShowsList(){
  console.log("Inside getshows service")
   const URL = this.BASE_URL + '/search/shows?q=comedy'; 
   return this._http.get(URL);

  }

  getShowDetail(showId: string){
  console.log("Inside getshows service")
   const URL = this.BASE_URL + '/shows/' + showId; 
   return this._http.get(URL);
  }

}
