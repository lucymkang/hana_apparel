import React from "react";
import { products } from "../data/hana_apparel_database";

const SingleProduct = () => {
  console.log(products);

  return products.map((single) => {
    const { product_name, style_number, id, category, sizes } = single;
    return (
      <main className="page-center">
        <div className="card " id={id}>
          <h2> {product_name}</h2>
          <img
            src="https://www.betabrand.com/media/catalog/product/s/t/straight_leg___classic_dress_pant_yoga_pants__black__126_20210217222912.jpg"
            className="card-img-top"
            alt="image"
            style={{ width: "200px" }}
          />
          <h4>Style Number: {style_number}</h4>
          <h5>{category}</h5>
          <h5>Available Size: {sizes}</h5>
        </div>
      </main>
    );
  });
};

export default SingleProduct;
