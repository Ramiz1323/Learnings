import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {
  const [productData, setproductData] = useState([]);

  const setData = async () => {
    setproductData(await getProducts());
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <ProductDataContext.Provider value={[productData, setproductData]}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
