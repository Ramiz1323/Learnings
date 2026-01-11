import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext.jsx";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  const { id } = useParams();
  let selectedProduct = "";

  if (productData.length > 0) {
    selectedProduct = productData[0].find((elem) => elem.id == id);
  }
  console.log(selectedProduct);
  return (
    <div className="productDetails max-w-3xl mx-auto mt-16 bg-[#0f172a] border border-gray-700 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
      <div className="w-64 h-64 flex items-center justify-center bg-black/40 rounded-xl">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="max-h-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-3xl font-semibold tracking-wide">
          {selectedProduct.title}
        </h1>

        <p className="text-xl text-gray-300">Premium Quality Product</p>

        <div className="text-2xl font-bold text-green-400">
          ₹ {selectedProduct.price}
        </div>

        <button className="mt-4 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
