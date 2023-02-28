import { Movie } from './../../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-featured-tv-shows',
  templateUrl: './featured-tv-shows.component.html',
  styleUrls: ['./featured-tv-shows.component.css'],
})
export class FeaturedTvShowsComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  tvShows: any = [];
  ngOnInit(): void {
    this.moviesService.getTrending('tv', 'week').subscribe((data) => {
      this.tvShows = data.results;
    });
  }
}
