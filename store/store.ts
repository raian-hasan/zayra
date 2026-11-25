// src/stores/counter-store.ts
import { cartType } from '@/types/cartType';
import { toast } from 'react-toastify';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla'

export type CartState = {
    carts: cartType[]
}

export type CartActions = {
    addToCart: (cart: cartType) => void;
    increment: (id: number) => void;
    decrement: (id: number) => void;
    deleteCart: (id: number) => void;
}

export type CartStore = CartState & CartActions

export const defaultInitState: CartState = {
    carts: []
}

export const createCartStore = (initState: CartState = defaultInitState) => {
    return createStore<CartStore>()(
        persist(
            (set) => ({
                ...initState,

                addToCart: (cart) => set((state) => {
                    const isExsist = state.carts.find(
                        (item) =>
                            item.product_id === cart.product_id &&
                            item.size === cart.size
                    );

                    if (isExsist) {
                        toast.success("Product quantity updated!");
                        return {
                            carts: state.carts.map((item) =>
                                item.id === isExsist.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    toast.success("Product added to cart!");
                    return {
                        carts: [...state.carts, cart],

                    };
                }),

                increment: (id) => set((state) => ({
                    carts: state.carts.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),

                decrement: (id) => set((state) => ({
                    carts: state.carts.map((item) =>
                        item.id === id
                            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                            : item
                    ),
                })),

                deleteCart: (id) => set((state) => ({
                    carts: state.carts.filter((item) => item.id !== id),
                })),
            }),
            {
                name: "zayra-cart-storage",
                storage: createJSONStorage(() => localStorage),

            }
        )
    );
}