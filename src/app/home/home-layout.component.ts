import { NgClass } from "@angular/common";
import {Component, OnInit} from "@angular/core";
import { mock_product_list } from "../cards/mock_product_list";
import { ProductItemModel } from "../cards/product-item.model";
import { VerticalComponentModel } from "../cards/vertical.card.component.model";
import { VerticalCardService } from "../cards/vertical.card.service";

@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit{
    title = 'fabric-mart';
    products: ProductItemModel [] = [];
    verticalcards: VerticalComponentModel[] = [];

    constructor(private verticalCardsService:VerticalCardService){
        // for(var product of mock_product_list) {
        //     console.log(product);
        //     this.products.push(product);
        // }
    }
    
    ngOnInit(): void {
        this.verticalCardsService.getInfo().subscribe((data: ProductItemModel []) =>{
            console.log("Fetching stuff")
            for(var product of data){
                console.log(data);
                this.products.push(product)
            }
        });
        throw new Error("Method not implemented.");
    }
}