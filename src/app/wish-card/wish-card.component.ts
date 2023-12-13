import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wish } from '../../shared/modules/Wish';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'wish-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './wish-card.component.html',
  styleUrl: './wish-card.component.css'
})
export class WishCardComponent {
  @Input() wish: Wish = {
    id: 0,
    wish: '',
    createdAt: new Date(),
    completed: false
  };  
  @Output() deletedWishId = new EventEmitter<number>();
  toggleCheck(){
    this.wish.completed = !this.wish.completed;
    this.wish.completedAt = new Date();
  }
  deteleWish(){
    this.deletedWishId.emit(this.wish.id);
  }
}
