export class ProductItemModel {
    img: string
    text1: string;
    link: string;
    text2: string;

    constructor( img: string, tex: string, link: string, tex2: string){
        this.img = img;
        this.text1 = tex;
        this.link = link;
        this.text2 = tex2;
    }
}