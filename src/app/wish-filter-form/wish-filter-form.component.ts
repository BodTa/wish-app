import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Wish } from '../../shared/modules/Wish';

const filters=[
  (item:Wish)=>item,
  (item:Wish)=>item.completed,
  (item:Wish)=>!item.completed,
]

@Component({
  selector: 'wish-filter-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter-form.component.html',
})
export class WishFilterFormComponent implements OnInit{
  @Input() filter:any;
  @Output() filterChange = new EventEmitter<any>();
  filterNumber: number = 0; 

  ngOnInit(): void {
    this.filterWish(0);
  }

  filterWish(value:any){
    this.filter = filters[value];
    this.filterChange.emit(filters[value]);
  }
}
