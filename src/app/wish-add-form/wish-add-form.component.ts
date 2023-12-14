import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-add-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-add-form.component.html',
})
export class WishAddFormComponent {
  wish:string = '';

  @Output() newWish = new EventEmitter<string>();

  addWish(){
    if(this.wish !== '')
       this.newWish.emit(this.wish);
    this.wish = '';
  }
}
