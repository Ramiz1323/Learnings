import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext.jsx";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);
  console.log(productData);

  let renderData = <h1>Loading...</h1>;
  if (productData.length > 0) {
    renderData = productData[0].map(function (elem, idx) {
      return (
        <Link className="product" key={idx} to={`/products/${elem.id}`}>
          <div
            className="card bg-[#0f172a] border border-gray-700 p-4 rounded-2xl shadow-lg 
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
                w-64 h-80 flex flex-col items-center justify-between"
          >
            <div className="w-full h-44 flex items-center justify-center bg-black/40 rounded-xl mb-3">
              <img
                src={elem.image}
                alt=""
                className="max-h-full object-contain"
              />
            </div>

            <h2 className="text-center text-sm font-medium leading-snug text-gray-100">
              {elem.title}
            </h2>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="productsPage min-h-screen px-6 py-10">
      <h1 className="text-center text-4xl font-semibold tracking-wide mb-10">
        Products
      </h1>

      <div className="allProducts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center">
        {renderData}
      </div>
    </div>
  );
};

export default Products;
