import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import CategoryList from '../../components/CategoryList/CategoryList'
import ProductList from '../../components/ProductList/ProductList'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import type { Product } from "../../types/product";
import { useState } from 'react'


  
function Home() {
 const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

const handleAddToCart = (
  product: Product,
  size: string,
  extras: string[],
  quantity: number
) => {
  const newItem: CartItem = {
    product,
    size,
    extras,
    quantity,
  };

  setCartItems((currentItems) => [
    ...currentItems,
    newItem,
  ]);
};
  interface CartItem {
  product: Product;
  size: string;
  extras: string[];
  quantity: number;
}

  return <>
    <main className="min-h-screen bg-[#F8F5F2] pb-28">
      <Header />

      <SearchBar />

      <CategoryList />
       <SpecialOffer />

      <ProductList
        onProductClick={setSelectedProduct}
      />

      <ProductDetails
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </main>
  </>
}

export default Home