/* eslint-disable react/no-unescaped-entities */

import ProductItem from "@/component/shared/ProductItem";
import { IProduct } from "@/types/product";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";





export default function FeaturedCard({ products }: { products: IProduct[] }) {
    return (
        <section className="bg-[#faf9f6] py-16 md:py-24 font-dosis">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Section Heading */}
                <div className="flex items-end justify-between mb-8 md:mb-12">
                    <div>
                        <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#a18a70]">
                            Curated for you
                        </span>

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#222] mt-3">
                            Featured <span className="italic">Collection</span>
                        </h2>

                        <p className="text-gray-500 text-xs sm:text-sm mt-3 max-w-md leading-6">
                            Pieces you'll love, styles you'll live in.
                        </p>
                    </div>

                    <Link
                        href="/shop"
                        className="hidden sm:flex items-center gap-2 text-xs tracking-widest uppercase border-b border-black pb-2 hover:text-[#a18a70] hover:border-[#a18a70] transition duration-300"
                    >
                        View All
                        <FiArrowUpRight size={16} />
                    </Link>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">


                    {products.map((item) => (
                        <ProductItem key={item.id} product={item} />

                    ))}


                </div>

            </div>
        </section>
    );
}
