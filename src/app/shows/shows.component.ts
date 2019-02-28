import { Component, OnInit } from '@angular/core';
import { ShowslistService } from '../services/showslist.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})

export class ShowsComponent implements OnInit {

	public showsResult: any;
	constructor(private _showsListService:ShowslistService,private _router: Router) { }

	ngOnInit() { this.getAllShows(); }

	getAllShows(){
		this._showsListService.getShowsList().subscribe(
			(res)=>{this.showsResult = res;}, 
			(err)=>{console.log("Error occured: ", err);}
		)
	}

	showDetail(showId: number){ this._router.navigate(['/home/show'],{queryParams: {id:showId}}) }

}
