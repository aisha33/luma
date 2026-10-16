import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Latte",
    description: "Smooth espresso with steamed milk",
    price: 19,
    image: "/images/latte.jpg",
    rating: 4.9,
    preparationTime: 5,
    category: "Coffee",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Perfect balance of espresso and milk foam",
    price: 16,
    image: "/images/cappuccino.jpg",
    rating: 4.8,
    preparationTime: 5,
    category: "Coffee",
  },
  {
    id: 3,
    name: "Iced Latte",
    description: "Cold espresso with milk over ice",
    price: 18,
    image: "/images/iced-latte.jpg",
    rating: 4.9,
    preparationTime: 5,
    category: "Cold Drinks",
  },
];