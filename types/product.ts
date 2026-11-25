import { ProductImageType } from "./image_gallery";
import { ProductPriceType } from "./product_price";

export type IProduct = {
    id: number;
    title: string;
    slug: string;
    image: string;
    featured: boolean;
    price_and_size: ProductPriceType[];
    image_gallery?: ProductImageType[]
    discount: number;
    discount_type: "percent" | "fixed";
    short_description: string;
    details: string
}