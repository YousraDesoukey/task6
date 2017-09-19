import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PhotoservicesService } from './photoservices.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'photos', component: PhotosComponent}, 
      {path: 'about-us', component: AboutUsComponent}]),
    HttpModule
  ],
  providers: [PhotoservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
