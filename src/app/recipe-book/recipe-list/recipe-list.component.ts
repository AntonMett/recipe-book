import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Burger', 'This is delicious burger!', 'https://media-cdn.tripadvisor.com/media/photo-s/07/6f/a8/1d/yum-yum.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
