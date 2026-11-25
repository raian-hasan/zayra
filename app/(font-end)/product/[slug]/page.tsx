

import PreviewDetails from "@/component/font-end/pages/preview_details/PreviewDetails";
import PreviewSlider from "@/component/font-end/pages/preview_slider/PreviewSlider";
import { ProductImageType } from "@/types/image_gallery";
import { IProduct } from "@/types/product";




const products: IProduct = {
    id: 1,
    title: "Premium Cotton Panjabi",
    slug: "premium-cotton-panjabi",
    image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    featured: true,
    price_and_size: [
        { id: 1, product_id: 1, size: "M", price: 1200 },
        { id: 2, product_id: 1, size: "L", price: 1300 },
        { id: 3, product_id: 1, size: "XL", price: 1400 },
    ],
    image_gallery: [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=85",
            alt: "Product view 1",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=85",
            alt: "Product view 2",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=85",
            alt: "Product view 3",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&q=85",
            alt: "Product view 4",
        },
    ],

    discount: 10,
    discount_type: "fixed",
    short_description: "Comfortable premium cotton panjabi for everyday wear.",
    details: "Made with high-quality cotton fabric, featuring a stylish design, breathable material, and comfortable fitting.",
}


const { image_gallery, ...rest } = products;


const ProductPreview = () => {
    return (
        <section className="bg-[#faf9f6] px-4 py-12 md:px-8 lg:py-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                <PreviewSlider sliderImage={image_gallery as ProductImageType[]} />
                <PreviewDetails productInfo={rest} />
            </div>
        </section>
    );
};

export default ProductPreview;
