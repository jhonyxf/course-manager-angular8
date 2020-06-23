import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: 'star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

    //Ele vai criar um atributo na tag app-star
    @Input()
    rating: number = 0;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }

}