import React from "react";
import { useContext } from "react";
import ProductContext from "./ProductContex";

export default function ProductListing() {
  let context = useContext(ProductContext);

  return (
    <React.Fragment>
      <ul>
        {
            context.products().map((p) => (
            <li>{p.product_name}</li>
            ))
        }
      </ul>
    </React.Fragment>
  );
}
