import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-filter-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter-form.component.html',
})
export class WishFilterFormComponent {
  filter: number = 0; 
  @Output() filterText = new EventEmitter<number>();

  filterWish(){
    this.filterText.emit(this.filter); 
  }
}
