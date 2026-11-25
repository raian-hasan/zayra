
"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/free-mode";

import { ProductImageType } from "@/types/image_gallery";

interface PreviewSliderProps {
    sliderImage: ProductImageType[];
}

export default function PreviewSlider({
    sliderImage,
}: PreviewSliderProps) {
    const mainSwiperRef = useRef<SwiperType | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="space-y-4">

            {/* Main Product Slider */}
            <div className="relative overflow-hidden rounded-2xl bg-[#f0ebe4]">

                <Swiper
                    onSwiper={(swiper) => {
                        mainSwiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    speed={500}
                    className="product-main-slider"
                >
                    {sliderImage.map((image) => (
                        <SwiperSlide key={image.id}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-[430px] w-full object-cover sm:h-[550px] lg:h-[650px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Badge */}
                <span className="absolute left-5 top-5 z-10 rounded-full bg-[#171717] px-4 py-2 text-xs font-medium tracking-wider text-white">
                    NEW ARRIVAL
                </span>

                {/* Previous Button */}
                <button
                    type="button"
                    onClick={() => mainSwiperRef.current?.slidePrev()}
                    disabled={activeIndex === 0}
                    className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[#171717] shadow transition hover:bg-[#171717] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous image"
                >
                    <FiChevronLeft />
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    onClick={() => mainSwiperRef.current?.slideNext()}
                    disabled={activeIndex === sliderImage.length - 1}
                    className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[#171717] shadow transition hover:bg-[#171717] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next image"
                >
                    <FiChevronRight />
                </button>
            </div>

            {/* Thumbnail Slider */}
            <Swiper
                modules={[FreeMode]}
                freeMode
                watchSlidesProgress
                spaceBetween={12}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        slidesPerView: 4,
                        spaceBetween: 8,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 12,
                    },
                }}
                className="product-thumbs-slider"
            >
                {sliderImage.map((image, index) => (
                    <SwiperSlide key={image.id}>
                        <button
                            type="button"
                            onClick={() => {
                                mainSwiperRef.current?.slideTo(index);
                            }}
                            className={`block w-full overflow-hidden rounded-xl border-2 transition ${activeIndex === index
                                ? "border-[#171717]"
                                : "border-transparent"
                                }`}
                            aria-label={`View product image ${index + 1}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-24 w-full object-cover sm:h-28"
                            />
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}
