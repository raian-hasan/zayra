import FeaturedCard from '@/component/font-end/pages/home/FeaturedCard'
import { IProduct } from '@/types/product'



const products: IProduct[] = [
  {
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
    discount: 10,
    discount_type: "fixed",
    short_description: "Comfortable premium cotton panjabi for everyday wear.",
    details: "Made with high-quality cotton fabric, featuring a stylish design, breathable material, and comfortable fitting.",
  },

  {
    id: 2,
    title: "Classic Oversized T-Shirt",
    slug: "classic-oversized-t-shirt",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    featured: true,
    price_and_size: [
      { id: 4, product_id: 2, size: "M", price: 850 },
      { id: 5, product_id: 2, size: "L", price: 950 },
      { id: 6, product_id: 2, size: "XL", price: 1050 },
    ],
    discount: 15,
    discount_type: "percent",
    short_description:
      "Minimal oversized t-shirt with a relaxed and modern fit.",
    details:
      "Crafted from soft premium cotton with a relaxed oversized silhouette, clean neckline, and minimal design for everyday styling.",
  },

  {
    id: 3,
    title: "Premium Casual Shirt",
    slug: "premium-casual-shirt",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    featured: true,
    price_and_size: [
      { id: 7, product_id: 3, size: "M", price: 1450 },
      { id: 8, product_id: 3, size: "L", price: 1550 },
      { id: 9, product_id: 3, size: "XL", price: 1650 },
    ],
    discount: 12,
    discount_type: "fixed",
    short_description:
      "A versatile casual shirt designed for effortless style.",
    details:
      "Made from premium breathable fabric with a refined button-down design, modern fitting, and a versatile style suitable for casual and semi-formal occasions.",
  },

  {
    id: 4,
    title: "Elegant Minimal Kurta",
    slug: "elegant-minimal-kurta",
    image: "https://nehirtoptangiyim.com/uploads/categories/elbise.jpg",
    featured: false,
    price_and_size: [
      { id: 10, product_id: 4, size: "M", price: 1600 },
      { id: 11, product_id: 4, size: "L", price: 1700 },
      { id: 12, product_id: 4, size: "XL", price: 1800 },
    ],
    discount: 0,
    discount_type: "percent",
    short_description:
      "Elegant minimal kurta with a premium and timeless look.",
    details:
      "Designed with a minimalist aesthetic, premium fabric, elegant detailing, and a comfortable silhouette for occasions and everyday sophistication.",
  },
];

export default function Home() {
  return (
    <>
      <FeaturedCard products={products} />

    </>
  )
}
