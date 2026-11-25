import Link from "next/link";
import { FiUser, FiShoppingBag, FiSearch } from "react-icons/fi";


export default function Header() {
    return (
        <header className="w-full bg-white border-b border-[#eae7e2] sticky top-0 z-20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="h-[90px] flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-center">
                        <span className="text-[27px] font-dosis tracking-[0.28em] font-bold text-[#171717]">
                            ZAYRA
                        </span>
                        <span className="text-[9px] font-dosis tracking-[0.35em] font-bold text-gray-500 mt-1">
                            MODERN FASHION
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        <ul className="flex items-center gap-10 font-dosis">
                            <li>
                                <Link
                                    href="/"
                                    className="text-[17px] tracking-[0.08em] font-medium text-[#444] hover:text-black transition-colors duration-300 relative group"
                                >
                                    Home
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/shop"
                                    className="text-[17px] tracking-[0.08em] font-medium text-[#444] hover:text-black transition-colors duration-300 relative group"
                                >
                                    Shop
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/collections"
                                    className="text-[17px] tracking-[0.08em] font-medium text-[#444] hover:text-black transition-colors duration-300 relative group"
                                >
                                    Collections
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="text-[17px] tracking-[0.08em] font-medium text-[#444] hover:text-black transition-colors duration-300 relative group"
                                >
                                    About
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-5 md:gap-7">

                        {/* Search */}
                        <button className="text-[#333] hover:text-black transition-colors">
                            <FiSearch size={19} strokeWidth={1.5} />
                        </button>

                        {/* Login */}
                        <Link
                            href="/login"
                            className="hidden sm:flex items-center gap-2 text-[13px] tracking-wide text-[#333] hover:text-black transition-colors"
                        >
                            <FiUser size={18} strokeWidth={1.5} />
                            <span className="text-[17px] font-dosis font-medium">Login</span>
                        </Link>

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="flex items-center gap-2 text-[#222] hover:text-black transition-colors"
                        >
                            <FiShoppingBag size={19} strokeWidth={1.5} />
                            <span className="text-[17px] tracking-wide font-dosis font-medium">Cart</span>
                            <span className="text-[11px] text-gray-500 font-dosis">(0)</span>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
}
