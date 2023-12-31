import { Component, Input } from '@angular/core';
import { Wish } from '../../shared/modules/Wish';
import { WishCardComponent } from "../wish-card/wish-card.component";
import { WishAddFormComponent } from "../wish-add-form/wish-add-form.component";

@Component({
    selector: 'wish-list',
    standalone: true,
    templateUrl: './wish-list.component.html',
    imports: [WishCardComponent, WishAddFormComponent]
})
export class WishListComponent {
 @Input() wishes: Wish[] = [];
@Input() filter =()=>{};
 updateWish(wish: Wish) {
    wish.completed = !wish.completed;
    localStorage.setItem('wishList', JSON.stringify(this.wishes));
  }
 deleteWish(id: number) {
    this.wishes = this.wishes.filter(wish => wish.id !== id);
    localStorage.setItem('wishList', JSON.stringify(this.wishes));
  }
}
