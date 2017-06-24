import { Component } from '@angular/core';
import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
articles: Article[];


constructor() {
	this.articles = [
	new Article('Angular 2', 'http://angular.io', 3),
	new Article('Fullstack', 'http://fullstck.io', 2),
	new Article('Angular Homepage','http://angular.io', 1),
	];
}


}