import {Component, Input} from "@angular/core";
@Component({
    selector: 'fm-vertical-card',
    templateUrl: 'vertical.card.component.html',
    styleUrls: ['vertical.card.component.css']
})
export class VerticalComponent{
    @Input() img: string;
    @Input() tex: string;
    @Input() but: string;
    @Input() link: string;
    @Input() tex2: string;
    
    constructor(){
        this.img = "";
        this.tex = "";
        this.but = "";
        this.link = "";
        this.tex2 = "";
    }
}