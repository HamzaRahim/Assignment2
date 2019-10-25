import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

    constructor(private alertController: AlertController) { }

    flag: boolean;
    fl = false;


    movies = [
        { name: 'Terminator', director: 'Tim Miller', description: 'Released on October 23,2019' },
        { name: 'ZomieLand', director: 'Rubern', description: 'Released on October 9,2019' },
        { name: 'Rambo', director: 'Adrian', description: 'Released on October 18,2019' },
        { name: 'Abominable', director: 'Jill Culton', description: 'Released on October 7,2019' },
    ];
    addMovie(i: { name: string; director: string; description: string; }) {
        this.movies.push(i);
    }
    searchMovie(index: any) {
        return this.movies[index];
    }

    getAllMovies() {
        return this.movies;
    }

 

  
    delMovie(index: any) {
        //this.flag = this.showConfirm();
        //if (this.flag === true)
        {
            this.movies.splice(index, 1);
        }
    }
}