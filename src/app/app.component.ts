import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wish } from '../shared/modules/Wish';
import { WishListComponent } from "./wish-list/wish-list.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, WishListComponent]
})
export class AppComponent implements OnInit {
  title = 'wish-app';

  wishList:  Wish[] =[];
  ngOnInit(): void {
    this.wishList = [
      { id: 1, wish: 'I wish I could fly', createdAt: new Date(), completed: false },
      { id: 2, wish: 'I wish I could be invisible', createdAt: new Date(), completed: false },
      { id: 3, wish: 'I wish I could be a millionaire', createdAt: new Date(), completed: false },
    ]};
}
