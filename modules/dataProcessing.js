import request from "./sendItBack.js";

export class process{
    constructor(data) {
        this.data = data
        this.cheapestProducts = {}
    }

    async findCheapest(){

        for(let offer of this.data){
            let productId = offer.productId
            let offerPrice = parseFloat(offer.price.substring(1))

            if(this.cheapestProducts?.[productId]) {
                let price = parseFloat(this.cheapestProducts[productId].price.substring(1))
                
                    if (price > offerPrice)
                        this.cheapestProducts[productId] = offer
            } else
                this.cheapestProducts[productId] = offer
        }

        this.cheapest = Object.values(this.cheapestProducts)
        
        console.log(this.cheapest)

        // await request(this.cheapest)
    }
}