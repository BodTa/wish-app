import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wish } from '../shared/modules/Wish';
import { WishFilterFormComponent } from "./wish-filter-form/wish-filter-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, WishFilterFormComponent]
})
export class AppComponent implements OnInit {
  title = 'wish-app';

  wishList:  Wish[] =[];
  getWishListFromLocalStorage() {
    this.wishList = JSON.parse(localStorage.getItem('wishList') || '[]');
  }

  ngOnInit(): void {
    this.getWishListFromLocalStorage();
  }
}
