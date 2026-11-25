
export const price_type = (discount: number, discountType: "percent" | "fixed") => {

    if (discountType == "fixed") {

        return `${discount}`
    }

    return `${discount}%`



}