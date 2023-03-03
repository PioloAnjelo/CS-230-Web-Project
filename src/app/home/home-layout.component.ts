import { NgClass } from "@angular/common";
import {Component} from "@angular/core";
import { VerticalComponentModel } from "../cards/vertical.card.component.model";

@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css'],
})
export class HomeLayoutComponent{
    verticalcards: VerticalComponentModel[] = [];

    constructor(){

    }
    
    
}