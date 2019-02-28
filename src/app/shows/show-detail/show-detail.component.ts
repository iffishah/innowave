import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ShowslistService} from '../../services/showslist.service'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})

export class ShowDetailComponent implements OnInit {
	public showId;
	private _show; 
	constructor(private _route:ActivatedRoute, private _showService: ShowslistService) { }

	ngOnInit() {
		this.showId = this._route.snapshot.queryParamMap.get('id')
		this.getShowDetail();
	}

	getShowDetail(){
		this._showService.getShowDetail(this.showId).subscribe(
			(res)=>{this._show= res;}, 
			(err)=>{console.log("show Detail Error occured!");}
		)
	}

}
