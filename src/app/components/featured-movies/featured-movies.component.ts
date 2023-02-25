import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.css'],
})
export class FeaturedMoviesComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  featuredMovies: Movie[] = [];

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.featuredMovies = data.results;
    });
  }
}
