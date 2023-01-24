export class MProduct{
    id?: number;
    title: string;
    description?: string;
    price: number;
    brand: string;
    category: string;
    image?: string | null;
    favorite?: boolean;

    constructor(){
        this.title = "";
        this.price = 0;
        this.brand = "";
        this.category = ""
    }
}