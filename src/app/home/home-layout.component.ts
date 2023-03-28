import { NgClass } from "@angular/common";
import {Component} from "@angular/core";
import { mock_product_list } from "../cards/mock_product_list";
import { ProductItemModel } from "../cards/product-item.model";
import { VerticalComponentModel } from "../cards/vertical.card.component.model";

@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css'],
})
export class HomeLayoutComponent{
    title = 'fabric-mart';
    products: ProductItemModel [] = [];
    verticalcards: VerticalComponentModel[] = [];

    constructor(){
        for(var product of mock_product_list) {
            console.log(product);
            this.products.push(product);
        }
    }
    
    
}