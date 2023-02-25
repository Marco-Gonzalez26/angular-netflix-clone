import { RootObject } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getMovies() {
    return this.httpClient.get<RootObject>(
      'https://api.themoviedb.org/3/discover/movie',
      {
        headers: {
          Authorization: `Bearer ${environment.MOVIE_DB_API_KEY}`,
        },
      }
    );
  }

  getTrending(
    type: 'all' | 'movie' | 'tv' | 'person' = 'all',
    time_window: 'day' | 'week' = 'day'
  ) {
    return this.httpClient.get<RootObject>(
      `https://api.themoviedb.org/3/trending/${type}/${time_window}`,
      {
        headers: {
          Authorization: `Bearer ${environment.MOVIE_DB_API_KEY}`,
        },
      }
    );
  }
}
