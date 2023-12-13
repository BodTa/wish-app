import { Component, Input } from '@angular/core';
import { Wish } from '../../shared/modules/Wish';
import { WishCardComponent } from "../wish-card/wish-card.component";

@Component({
    selector: 'wish-list',
    standalone: true,
    templateUrl: './wish-list.component.html',
    styleUrl: './wish-list.component.css',
    imports: [WishCardComponent]
})
export class WishListComponent {
 @Input() wishes: Wish[] = [];
}
