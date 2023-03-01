import {Component, Input} from '@angular/core'

@Component({
    selector: 'fm-promotions-carousel',
    templateUrl: 'promotions.carousel.component.html',
    styleUrls: ['promotions.carousel.component.css']
})
export class PromotionsCarouselComponent{
    @Input() img: string;
    @Input() video: string;
    description: string;

    constructor(){
        this.img = "";
        this.video = "";
        this.description = "Missing Desc."
    }
}