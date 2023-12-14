import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-add-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-add-form.component.html',
  styleUrl: './wish-add-form.component.css'
})
export class WishAddFormComponent {
  wish:string = '';

  @Output() newWish = new EventEmitter<string>();

  addWish(){
    this.newWish.emit(this.wish);
    this.wish = '';
  }
}
