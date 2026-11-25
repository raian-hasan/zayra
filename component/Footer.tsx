
import Link from "next/link";
import {
    FiInstagram,
    FiFacebook,
    FiYoutube,
    FiArrowUpRight,
    FiMail,
    FiPhone,
    FiMapPin,
} from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-[#171717] text-white font-dosis">

            {/* Newsletter Section */}
            <div className="border-b border-white/10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                        <div className="max-w-xl">
                            <p className="text-[11px] tracking-[0.3em] text-[#b6a18a] uppercase mb-4">
                                Stay in style
                            </p>

                            <h2 className="text-3xl md:text-4xl font-light tracking-wide leading-tight">
                                Be the first to know
                                <br />
                                <span className="text-[#b6a18a] italic">
                                    what’s new.
                                </span>
                            </h2>

                            <p className="text-sm text-gray-400 mt-4 leading-7">
                                Discover new collections, exclusive offers and
                                timeless pieces made for you.
                            </p>
                        </div>


                        <div className="w-full lg:max-w-md">
                            <div className="flex items-center border-b border-white/30 pb-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
                                />

                                <button className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase whitespace-nowrap hover:text-[#b6a18a] transition-colors duration-300">
                                    Subscribe
                                    <FiArrowUpRight size={17} />
                                </button>
                            </div>

                            <p className="text-[11px] text-gray-500 mt-4 leading-5">
                                By subscribing, you agree to receive updates from ZAYRA.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block">
                            <h2 className="text-3xl font-medium tracking-[0.3em]">
                                ZAYRA
                            </h2>

                            <p className="text-[9px] tracking-[0.4em] text-[#b6a18a] mt-2">
                                MODERN FASHION
                            </p>
                        </Link>

                        <p className="text-sm text-gray-400 leading-7 mt-6 max-w-xs">
                            Redefining everyday elegance with timeless styles,
                            thoughtful details and effortless fashion.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-5 mt-7">
                            <Link
                                href="#"
                                aria-label="Instagram"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <FiInstagram size={19} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="Facebook"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <FiFacebook size={19} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="YouTube"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <FiYoutube size={19} />
                            </Link>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-7">
                            Explore
                        </h3>

                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/shop"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Shop All
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/collections"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Collections
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/new-arrivals"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    New Arrivals
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/best-sellers"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Best Sellers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-7">
                            Customer Care
                        </h3>

                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/faq"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    FAQs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/shipping"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Shipping & Delivery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/returns"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Returns & Exchanges
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/size-guide"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Size Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-7">
                            Get in Touch
                        </h3>

                        <ul className="flex flex-col gap-5">

                            <li className="flex items-start gap-3">
                                <FiMail
                                    size={17}
                                    className="text-[#b6a18a] mt-1 shrink-0"
                                />

                                <div>
                                    <p className="text-xs text-gray-500 mb-1">
                                        Email us
                                    </p>

                                    <Link
                                        href="mailto:hello@zayra.com"
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        hello@zayra.com
                                    </Link>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <FiPhone
                                    size={17}
                                    className="text-[#b6a18a] mt-1 shrink-0"
                                />

                                <div>
                                    <p className="text-xs text-gray-500 mb-1">
                                        Call us
                                    </p>

                                    <Link
                                        href="tel:+8801XXXXXXXXX"
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        +880 1XXX-XXXXXX
                                    </Link>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <FiMapPin
                                    size={17}
                                    className="text-[#b6a18a] mt-1 shrink-0"
                                />

                                <div>
                                    <p className="text-xs text-gray-500 mb-1">
                                        Visit us
                                    </p>

                                    <p className="text-sm text-gray-400 leading-6">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10 mt-16 pt-7 flex flex-col md:flex-row items-center justify-between gap-5">

                    <p className="text-xs text-gray-500 text-center md:text-left">
                        © 2026 ZAYRA. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="text-xs text-gray-500 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-xs text-gray-500 hover:text-white transition-colors"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                    <p className="text-[10px] tracking-[0.2em] text-[#b6a18a] uppercase">
                        Wear Your Identity.
                    </p>

                </div>
            </div>
        </footer>
    );
}
