import { HttpClient } from "@angular/common/http";
import { ProductItemModel } from "./product-item.model";
import { Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class VerticalCardService{
    private baseUrl:string = "https://cs230websitelab-default-rtdb.firebaseio.com/";
    private infoEndPoint:string = "firstMockProduct.json";

    constructor(private http:HttpClient){

    }
    
    getInfo(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.infoEndPoint);
    }

    getInfoIndex(index:number){
        return this.http.get<ProductItemModel []>(this.baseUrl + 'firstMockProduct' + '/' + index + '.json');
    }
}