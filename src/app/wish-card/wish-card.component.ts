import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wish } from '../../shared/modules/Wish';
import { DatePipe } from '@angular/common';
import {EventService} from '../../shared/services/EventService';
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
    completed: false
  };  
  @Output() deletedWishId = new EventEmitter<number>();
  @Output() updatedWish = new EventEmitter<Wish>();
  
  constructor(private events:EventService){

  }
  toggleCheck(){
    this.updatedWish.emit(this.wish);
  }
  deteleWish(){
    this.events.emit('deleteWish',this.wish.id);
  }
}
