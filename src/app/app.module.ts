import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { register } from 'swiper/element';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedMoviesComponent } from './components/featured-movies/featured-movies.component';
import { FeaturedTvShowsComponent } from './components/featured-tv-shows/featured-tv-shows.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

register(true);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesListComponent,
    HeroComponent,
    FeaturedMoviesComponent,
    FeaturedTvShowsComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
