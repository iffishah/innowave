import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ShowslistService} from '../../services/showslist.service'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  showId;
  private show; 
  constructor(private _route:ActivatedRoute, private _showService: ShowslistService) { }

  ngOnInit() {

    this.showId = this._route.snapshot.queryParamMap.get('id')
    console.log("show id: ",this.showId)
   this.getShowDetail();


  }


  getShowDetail(){

   this._showService.getShowDetail(this.showId)
   .subscribe((res)=>{
     this.show= res;


     console.log("show Detail data: ", this.show);
     



   }, (err)=>{

     console.log("show Detail Error occured!");
   })
  }





}
