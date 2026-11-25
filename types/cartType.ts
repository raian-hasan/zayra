export type cartType = {
    id: number;
    product_id: number;
    price_and_size_id: number;
    title: string;
    image: string;
    main_price: number;
    discount_price: number;
    size: string;
    discount: number;
    discount_type: "percent" | "fixed";
    quantity: number;
}
