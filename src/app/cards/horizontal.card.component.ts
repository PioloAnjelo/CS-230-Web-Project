import {Component, Input} from "@angular/core";

@Component({
    selector: 'fm-horizontal-card',
    templateUrl: 'horizontal.card.component.html',
    styleUrls: ['horizontal.card.component.css'],
})
export class HorizontalCardComponent{
    @Input() link: string;

    constructor(){
        this.link = "";
    }
}