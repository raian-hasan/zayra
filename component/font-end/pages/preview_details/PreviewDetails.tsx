/* eslint-disable react/no-unescaped-entities */
"use client"


import { useCartStore } from "@/provider/cartProvider";
import { IProduct } from "@/types/product";
import { generateRandomId } from "@/utils/ganrate_id";
import { priceAfDis } from "@/utils/price_af_discount";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";


export default function PreviewDetails({ productInfo }: { productInfo: IProduct }) {
    const [size_count, setSize_count] = useState<{ id: number; count: number; price: number; size: string }[]>([])
    const [order_active, setOrder_Acitve] = useState(true)

    const { addToCart } = useCartStore((store) => store)


    const handleSize = (id: number, price: number, size: string) => {
        const isExist = size_count.find((item) => item.id === id)

        if (isExist) {
            return setSize_count((prev) => {
                return prev.filter((item) => item.id != id)
            })
        }

        return setSize_count([
            ...size_count,
            {
                id: id,
                count: 1,
                price,
                size
            }
        ])


    }


    const handleIncrement = (id: number) => {

        setSize_count((prev) => {
            return prev.map((item) => {
                return item.id === id ? { ...item, count: item.count + 1 }
                    : item
            });
        });

    }

    const handleDecrement = (id: number) => {

        setSize_count((prev) => {
            return prev.map((item) => item.id === id ? { ...item, count: Math.max(1, item.count - 1) }
                : item)
        })

    }

    const handleOrder = () => {
        setOrder_Acitve(false)
        if (size_count.length === 0) {
            toast.error("Please, Select a product")
            setOrder_Acitve(true)
        }

    }



    const handleAddToCart = () => {

        if (size_count.length === 0) {
            toast.error("Please, Select a product")
        }


        size_count.forEach((item) => {

            const cartItem = {
                id: generateRandomId(),
                product_id: productInfo.id,
                price_and_size_id: item.id,
                title: productInfo.title,
                image: productInfo.image,
                main_price: item.price,
                discount_price: priceAfDis(item.price, productInfo.discount, productInfo.discount_type),
                size: item.size,
                discount: productInfo.discount,
                discount_type: productInfo.discount_type,
                quantity: item.count
            }

            addToCart(cartItem)

        })


    }



    return (
        <>
            {/* Product Information */}
            <div className="flex flex-col justify-center">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#a18a70]">
                    ZAYRA / MEN'S COLLECTION
                </p>

                <h1 className="font-heading text-3xl font-medium leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
                    {productInfo.title}
                </h1>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                    {productInfo.short_description}
                </p>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-2">
                    <div className="flex text-sm text-[#b18c52]">
                        ★★★★★
                    </div>
                    <span className="text-xs text-gray-500">
                        (24 Reviews)
                    </span>
                </div>

                <div className="my-7 border-t border-[#e9e4dc]" />

                {/* Size Selection */}
                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-[#171717]">
                            Select Size
                        </h3>
                        <button className="text-xs text-gray-500 underline underline-offset-4">
                            Size Guide
                        </button>
                    </div>

                    <div className="mb-3 grid grid-cols-3 gap-2">
                        {productInfo.price_and_size.map((item) => (
                            <div
                                onClick={() => handleSize(item.id, item.price, item.size)}
                                key={item.id}
                                className={`rounded-lg border-2 ${size_count.some((selected) => selected.id === item.id)
                                    ? "border-[#171717]"
                                    : "border-gray-200"
                                    } bg-white p-2 text-center cursor-pointer`}
                            >
                                <p className="text-xs font-semibold text-[#171717]">
                                    {item.size}
                                </p>

                                <p className="mt-1 text-sm font-semibold text-[#171717]">
                                    ৳{item.price}
                                </p>

                                <button className="mt-0.5 text-[9px] uppercase tracking-wider text-[#a18a70]">
                                    Selected
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                    {size_count.map((item) => {
                        const sizeInfo = productInfo.price_and_size.find((selected) => selected.id === item.id);

                        if (!sizeInfo) return null;

                        return (
                            <div
                                key={item.id}
                                className="min-w-0 rounded-lg border border-[#e9e4dc] bg-white p-2"
                            >
                                <p className="truncate text-[8px] font-medium uppercase tracking-wide text-gray-400">
                                    Selected Variation
                                </p>

                                <div className="mt-1 flex flex-wrap items-center gap-1">
                                    <span className="text-[10px] font-semibold text-[#171717]">
                                        Size: {sizeInfo.size}
                                    </span>
                                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                                    <span className="text-[9px] text-green-600">
                                        In Stock
                                    </span>
                                </div>

                                <div className="mt-2">
                                    <p className="text-[8px] uppercase tracking-wide text-gray-400">
                                        Price
                                    </p>
                                    <p className="text-sm font-bold text-[#171717]">
                                        ৳{sizeInfo.price}
                                    </p>
                                </div>

                                <div className="mt-2 border-t border-dashed border-[#e5e0d8] pt-2">
                                    <p className="mb-1 text-[10px] font-medium text-gray-600">
                                        Quantity
                                    </p>

                                    <div className="flex items-center justify-between gap-0.5 rounded-md border border-[#e5e0d8] px-1 py-1">
                                        <button onClick={() => handleDecrement(item.id)} className="text-xs text-gray-500">−</button>
                                        <span className="text-[10px] font-semibold">{item.count}</span>
                                        <button onClick={() => handleIncrement(item.id)} className="text-xs text-gray-500">+</button>
                                    </div>
                                </div>
                            </div>

                        )

                    })}


                </div>
                {/* Total */}
                <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                        Total Amount
                    </span>
                    <span className="text-2xl font-bold text-[#171717]">
                        ৳1,200
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        disabled={!order_active}
                        onClick={handleOrder}
                        className={`flex items-center justify-center rounded-xl px-6 py-4 text-sm font-semibold tracking-wide transition ${order_active
                            ? "bg-[#171717] text-white hover:bg-[#39332d] cursor-pointer"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        {!order_active && (
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                        )}

                        <span>⚡</span>
                        {!order_active ? "Order Processing, please wait" : "Order Now"}
                    </button>

                    <button onClick={handleAddToCart} className="flex items-center justify-center gap-2 rounded-xl border border-[#171717] bg-transparent px-6 py-4 text-sm font-semibold tracking-wide text-[#171717] transition hover:bg-[#171717] hover:text-white">
                        <FiShoppingCart size={19} strokeWidth={1.7} />
                        Add to Cart
                    </button>
                </div>

                {/* Extra Information */}
                <div className="mt-7 grid grid-cols-2 gap-4 border-t border-[#e9e4dc] pt-6">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🚚</span>
                        <div>
                            <p className="text-xs font-semibold text-[#171717]">
                                Fast Delivery
                            </p>
                            <p className="mt-1 text-[10px] text-gray-500">
                                Across Bangladesh
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xl">↩</span>
                        <div>
                            <p className="text-xs font-semibold text-[#171717]">
                                Easy Exchange
                            </p>
                            <p className="mt-1 text-[10px] text-gray-500">
                                Within 7 Days
                            </p>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}
