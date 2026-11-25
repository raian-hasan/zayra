type FnType = (price: number, discount: number, discountType: "fixed" | "percent") => number

export const priceAfDis: FnType = (price, discount, discountType) => {

    if (discountType === "fixed") {
        return price - discount;
    }

    const discountAmount = (discount / 100) * price;

    return price - discountAmount;

}