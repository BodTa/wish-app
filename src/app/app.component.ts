import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wish } from '../shared/modules/Wish';
import { WishListComponent } from "./wish-list/wish-list.component";
import { WishFilterFormComponent } from "./wish-filter-form/wish-filter-form.component";
import { WishAddFormComponent } from "./wish-add-form/wish-add-form.component";
import {EventService} from "../shared/services/EventService";
import { WishService } from '../shared/services/wish.service';


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
  filter: any;
  
  constructor(private events: EventService, private wishService: WishService) {
    this.events.listen('deleteWish', (id: number) => {
      this.wishList = this.wishList.filter((wish) => wish.id !== id);
      localStorage.setItem('wishList', JSON.stringify(this.wishList));
    });
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any)=>{
        this.wishList = data;
    });
  }

  
  addNewWish(wish: string) {
    this.wishList.push({
      id: this.wishList.length + 1,
      wish: wish,
      completed: false,
    });
    localStorage.setItem('wishList', JSON.stringify(this.wishList));
  }

}
