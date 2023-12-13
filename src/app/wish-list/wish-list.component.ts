import { Component, Input } from '@angular/core';
import { Wish } from '../../shared/modules/Wish';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
 @Input() wishes: Wish[] = [];
}
