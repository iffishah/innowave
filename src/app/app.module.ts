import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './layout/top-nav-bar/top-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { PeopleComponent } from './people/people.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShowDetailComponent } from './shows/show-detail/show-detail.component';
import { LoginComponent } from './login/login.component'

import { ShowslistService } from './services/showslist.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HomeComponent,
    ShowsComponent,
    PeopleComponent,
    ContactComponent,
    FooterComponent,
    ShowDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShowslistService,AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
