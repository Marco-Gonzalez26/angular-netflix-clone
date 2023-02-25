import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTvShowsComponent } from './featured-tv-shows.component';

describe('FeaturedTvShowsComponent', () => {
  let component: FeaturedTvShowsComponent;
  let fixture: ComponentFixture<FeaturedTvShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedTvShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
