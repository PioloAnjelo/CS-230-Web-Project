export class ProductItemModels {
    img: string
    name: string
    title: string
    text1: string;
    text2: string;

    constructor(img: string, tex: string, name: string, tex2: string, title: string){
        this.img = img;
        this.text1 = tex;
        this.name = name;
        this.text2 = tex2;
        this.title  = title;
    }
}