import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wish } from '../shared/modules/Wish';
import { WishListComponent } from "./wish-list/wish-list.component";
import { WishFilterFormComponent } from "./wish-filter-form/wish-filter-form.component";
import { WishAddFormComponent } from "./wish-add-form/wish-add-form.component";
import {EventService} from "../shared/services/EventService";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, WishListComponent, WishFilterFormComponent, WishAddFormComponent]
})
export class AppComponent implements OnInit {
  title = 'wish-app';
  wishList:  Wish[] =[];
  initialList: Wish[] = [
    { id: 1, wish: 'I wish I could fly', createdAt: new Date(), completed: false },
    { id: 2, wish: 'I wish I could be invisible', createdAt: new Date(), completed: false },
    { id: 3, wish: 'I wish I could be a millionaire', createdAt: new Date(), completed: false },
  ];

  filter: any;

  ngOnInit(): void {
    this.wishList =localStorage.getItem('wishList') ? JSON.parse(localStorage.getItem('wishList') || '{}') : this.initialList;
  }

  constructor(private events: EventService) {
    this.events.listen('deleteWish', (id: number) => {
      this.wishList = this.wishList.filter((wish) => wish.id !== id);
      localStorage.setItem('wishList', JSON.stringify(this.wishList));
    });
  }
  
  addNewWish(wish: string) {
    this.wishList.push({
      id: this.wishList.length + 1,
      wish: wish,
      completed: false,
      createdAt: new Date()
    });
    localStorage.setItem('wishList', JSON.stringify(this.wishList));
  }

}
