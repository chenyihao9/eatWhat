import { Component } from '@angular/core';
import { FOODS } from './mock-foods';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	foods = FOODS;
	show_list = true;
	active = 0;
	private timer;
  	choose_food = null;
  	disabled = false;
  getRandom (){
  	this.show_list = true;
  	this.disabled = true;
  	this.timer = setInterval(() => {
  	 	this.active = Math.floor(Math.random() * (this.foods.length-1));
  	 },100);
  	setTimeout(() => {
  		clearInterval(this.timer);
  		this.disabled = false;
  		this.show_list = false;
  		this.choose_food = this.foods[this.active];
  	},3000);
  }
}
