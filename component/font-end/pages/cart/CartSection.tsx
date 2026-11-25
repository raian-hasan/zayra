"use client";



import { useCartStore } from "@/provider/cartProvider";
import Image from "next/image";
import { FiTrash2, FiArrowLeft } from "react-icons/fi";

export default function CartSection() {

    const { carts, increment, decrement, deleteCart } = useCartStore((store) => store)

    const shippingFee = 90;

    const totalPrice = carts.reduce((total, current) => {
        return total + (current.discount_price * current.quantity);
    }, 0)


    return (
        <section className="min-h-screen bg-[#faf9f6] px-4 py-12 sm:px-6 lg:px-10 font-dosis">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10 border-b border-[#e8e3dc] pb-6">
                    <div className="mb-3 flex items-center justify-between">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[#a18a70]">
                            ZAYRA
                        </p>
                        <p className="text-xs tracking-widest text-gray-400">
                            YOUR SHOPPING BAG
                        </p>
                    </div>

                    <h1 className="font-serif text-4xl text-[#171717] sm:text-5xl">
                        Shopping Bag
                    </h1>
                    <p className="mt-3 text-sm text-gray-500">
                        Review your selected pieces before checkout.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">

                    {/* Cart Items */}
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-sm font-semibold tracking-widest text-[#171717]">
                                YOUR ITEMS (02)
                            </h2>
                            <button className="text-xs text-gray-500 underline underline-offset-4">
                                Continue Shopping
                            </button>
                        </div>

                        <div className="divide-y divide-[#e8e3dc]">

                            {carts.map((item) => (
                                <div key={item.id} className="flex gap-4 py-6 sm:gap-6">
                                    <div className="relative h-36 w-28 shrink-0 overflow-hidden rounded-lg bg-[#f0ece5] sm:h-44 sm:w-36">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 112px, 144px"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col justify-between">
                                        <div>
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <h3 className="text-sm font-semibold text-[#171717] sm:text-base">
                                                        {item.title}
                                                    </h3>
                                                    <p className="mt-2 text-xs text-gray-500">
                                                        Size: <span className="text-[#171717]">{item.size}</span>
                                                    </p>
                                                </div>

                                                <button onClick={() => deleteCart(item.id)} className="text-gray-400 transition hover:text-red-500">
                                                    <FiTrash2 size={17} />
                                                </button>
                                            </div>

                                            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-[#a18a70]">
                                                ৳ {item.discount_price}
                                                <span className="text-xs text-gray-400 line-through">
                                                    ৳ {item.main_price}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex h-9 items-center border border-[#e5dfd6]">
                                                <button onClick={() => decrement(item.id)} className="px-3 text-sm text-gray-500">−</button>
                                                <span className="px-2 text-sm">{item.quantity}</span>
                                                <button onClick={() => increment(item.id)} className="px-3 text-sm text-gray-500">+</button>
                                            </div>

                                            <p className="text-sm font-semibold text-[#171717]">
                                                ৳ {item.discount_price * item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}



                        </div>

                        {/* Back to shop */}
                        <button className="mt-6 flex items-center gap-2 text-sm font-medium text-[#171717] transition hover:text-[#a18a70]">
                            <FiArrowLeft size={16} />
                            Continue Shopping
                        </button>
                    </div>

                    {/* Order Summary */}
                    <aside className="h-fit rounded-xl border border-[#e8e3dc] bg-white p-6 sm:p-7">
                        <h2 className="mb-6 font-serif text-2xl text-[#171717]">
                            Order Summary
                        </h2>

                        <div className="space-y-4 border-b border-[#e8e3dc] pb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="font-medium text-[#171717]">৳ {totalPrice}</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Shipping</span>
                                <span className="font-medium text-[#171717]">৳ {totalPrice ? `${shippingFee}` : 0}</span>
                            </div>

                        </div>

                        <div className="flex items-center justify-between py-6">
                            <span className="text-base font-semibold text-[#171717]">
                                Total
                            </span>
                            <span className="font-serif text-2xl font-semibold text-[#171717]">
                                ৳ {totalPrice ? `${totalPrice + shippingFee}` : 0}
                            </span>
                        </div>

                        <button className="w-full rounded-lg bg-[#171717] px-5 py-4 text-xs font-semibold tracking-[0.15em] text-white transition hover:bg-[#a18a70]">
                            PROCEED TO CHECKOUT
                        </button>

                        <p className="mt-5 text-center text-xs leading-6 text-gray-400">
                            Secure Checkout · Easy Exchange · Premium Quality
                        </p>
                    </aside>

                </div>
            </div>
        </section>
    );
}
