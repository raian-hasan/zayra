import { IProduct } from "@/types/product";
import { price_range } from "@/utils/price_range";
import { price_type } from "@/utils/price_type";
import Link from "next/link";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";


export default function ProductItem({ product }: { product: IProduct }) {
    return (
        <div className="group rounded-2xl border border-[#e8e3dc] bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8cbbb] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-3">
            <div className="relative overflow-hidden rounded-xl bg-[#eee9e2]">


                <Link href={`/product/${product.slug}`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                </Link>

                <span className="absolute left-3 top-3 rounded-full bg-[#222] px-3 py-1.5 text-[9px] uppercase tracking-wider text-white sm:left-4 sm:top-4 sm:text-[10px]">
                    Bestseller
                </span>

                <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 transition duration-300 hover:bg-black hover:text-white sm:right-4 sm:top-4 sm:h-9 sm:w-9">
                    <FiHeart size={15} />
                </button>

                <Link
                    href={`/product/${product.slug}`}
                    className="absolute bottom-3 left-3 right-3 hidden translate-y-5 items-center justify-center gap-2 rounded-xl bg-white/95 py-3 text-[10px] uppercase tracking-widest opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex"
                >
                    View Product
                    <FiArrowUpRight size={14} />
                </Link>
            </div>

            <div className="px-1 pb-1 pt-3">
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#a18a70] sm:text-[10px]">
                    Soft & Timeless
                </p>

                <Link href={`/product/${product.slug}`}>

                    <h3 className="mt-1 truncate font-heading text-lg text-[#242424] sm:text-xl lg:text-2xl hover:text-[#6E2617]">
                        Everyday Knit
                    </h3>
                </Link>

                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-[#222] sm:text-sm">
                        ৳ {price_range(product.price_and_size)}
                    </span>

                    <span className="text-[10px] text-gray-400 line-through sm:text-xs">
                        ৳ {price_type(product.discount, product.discount_type)}
                    </span>

                    <span className="text-[9px] text-[#9b8064] sm:text-[10px]">
                        -18%
                    </span>
                </div>
            </div>
        </div>
    )
}
