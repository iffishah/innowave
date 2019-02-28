import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShowslistService {

	private _baseURL= 'http://api.tvmaze.com';
	constructor(private _http:HttpClient) { }

	getShowsList(){
		const URL = this._baseURL + '/search/shows?q=comedy'; 
		return this._http.get(URL);
	}

	getShowDetail(showId: number){
		const URL = this._baseURL + '/shows/' + showId; 
		return this._http.get(URL);
	}

}
