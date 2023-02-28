import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Movie } from './../../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

import SwiperCore, {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
  Scrollbar,
} from 'swiper';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesListComponent {
  @Input() movies: Movie[] = [];
  @Input() title = '';

  show() {

  }

  noShow() {

  }

  config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    init: true,
    enabled: true,
    allowSlideNext: false,
    allowSlidePrev: false,

    grabCursor: true,
    loopPreventsSliding: true,
    loop: true,
    cssMode: true,
    spaceBetween: 1,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    slidesPerView: 5,

    centeredSlides: false,
    injectStylesUrls: [
      'https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.css',
      'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css',
    ],

    breakpoints: {
      400: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
    },
  };
}
