import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IssComponent } from './pages/iss/iss.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RocketLaunchesComponent } from './pages/rocket-launches/rocket-launches.component';
import { CoordinatesModule } from 'angular-coordinates'
import { LightboxModule } from 'ngx-lightbox';
import { EarthPhotoComponent } from './pages/earth-photo/earth-photo.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssComponent,
    RocketLaunchesComponent,
    EarthPhotoComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LeafletModule.forRoot(),
    CoordinatesModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
