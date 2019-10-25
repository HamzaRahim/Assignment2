import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesListService } from '../movies-list.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {
    name: string;
    dir: string;
    des: string;

    constructor(private moviesList: MoviesListService, private router: Router) { }

  ngOnInit() {
  }
    addingMovie() {
        const i = {
            name: this.name,
            director: this.dir,
            description: this.des
        };
        this.moviesList.addMovie(i);
        this.router.navigate(['/home']);
    }

}
