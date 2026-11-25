import { ProductPriceType } from "@/types/product_price";

export const price_range = (priceArr: ProductPriceType[]) => {

    if (priceArr.length == 1) {

        return priceArr[0].price;

    }

    const prices = priceArr.map((item) => item.price)

    return `${Math.min(...prices)} - ${Math.max(...prices)}`


}