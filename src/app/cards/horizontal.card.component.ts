import {Component, Input} from "@angular/core";

@Component({
    selector: 'fm-horizontal-card',
    templateUrl: 'horizontal.card.component.html',
    styleUrls: ['horizontal.card.component.css'],
})
export class HorizontalCardComponent{
    @Input() img: string;
    @Input() text1: string;
    @Input() title: string;
    @Input() name: string;
    @Input() text2: string;
    
    constructor(){
        this.img = "";
        this.text1 = "";
        this.title = "";
        this.name = "";
        this.text2 = "";
    }
}