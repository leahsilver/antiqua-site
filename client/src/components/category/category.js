import React, { useEffect, useState } from "react";
import "./category.css";
import Product from "../product/product";

function Category(props) {
  const getProducts = async (res) => {
    let ProductList;
    await fetch(`http://localhost:3080/` + category, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    })
      .then((res) => res.json())
      .then((res) => {
        ProductList = res;
      });
    return ProductList;
  };
  const { onClick, category, list } = props;
  const [department,setDepartment]=useState([])
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let OpinionList = await getProducts();
    setDepartment(OpinionList)
  }
  return (
    <div>
      <div className="product">
        {department.map((item) => {
          let src = require(`../../images/${category}/${item.src}`).default;
          return (
            <Product
              key={item.name}
              className="card"
              onClick={onClick}
              details={item}
              list={list}
              src={src}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Category;
