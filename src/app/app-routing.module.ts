import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { ContactComponent } from './contact/contact.component';
import { ShowDetailComponent } from './shows/show-detail/show-detail.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
	{path:'',component:LoginComponent}, 
	{path:'login',component:LoginComponent},
	{path:'home',component:HomeComponent, 

    children :[
    {path:'shows',component:ShowsComponent},
    {path:'contact',component:ContactComponent},
    ]
	},

	    {path:'contact',component:ContactComponent},

	
    {path: 'show', component: ShowDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
