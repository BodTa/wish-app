import { Component, Input } from '@angular/core';
import { Wish } from '../../shared/modules/Wish';
import { WishCardComponent } from "../wish-card/wish-card.component";
import { WishAddFormComponent } from "../wish-add-form/wish-add-form.component";

const filters=[
  (item:Wish)=>item,
  (item:Wish)=>item.completed,
  (item:Wish)=>!item.completed,
]

@Component({
    selector: 'wish-list',
    standalone: true,
    templateUrl: './wish-list.component.html',
    imports: [WishCardComponent, WishAddFormComponent]
})
export class WishListComponent {
 @Input() wishes: Wish[] = [];
@Input() filter: number = 0;
 updateWish(wish: Wish) {
    wish.completed = !wish.completed;
    if(wish.completed)
    wish.completedAt = new Date();
  else{
    wish.completedAt = undefined;
  }
    localStorage.setItem('wishList', JSON.stringify(this.wishes));
  }
 deleteWish(id: number) {
    this.wishes = this.wishes.filter(wish => wish.id !== id);
    localStorage.setItem('wishList', JSON.stringify(this.wishes));
  }
  addNewWish(wish: string) {
    this.wishes.push({
      id: this.wishes.length + 1,
      wish: wish,
      completed: false,
      createdAt: new Date()
    });
    localStorage.setItem('wishList', JSON.stringify(this.wishes));
  }

  get filteredWishes(){
    return this.wishes.filter(filters[this.filter]);
  }
}
