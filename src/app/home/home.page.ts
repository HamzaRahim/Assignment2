import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MoviesListService } from '../movies-list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    movies: { name: string; director: string; description: string; }[];
    constructor(private moviesList: MoviesListService,
        private router: Router) { }

    ngOnInit() {
        this.movies = this.moviesList.getAllMovies();
    }
    onClik() {
        this.router.navigate(['/add-movie']);
    }
    onClick(i: any) {
        let navExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(i)
            }
        }
        this.router.navigate(['/display-movie'], navExtras);
    }

    delete(nme: any) {
        this.moviesList.delMovie(nme);
    }

}
