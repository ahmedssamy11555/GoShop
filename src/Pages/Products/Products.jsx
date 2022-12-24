import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import { baseUrl } from "../../hooks/useFetch";
import { BsFilter } from "react-icons/bs";

const Products = () => {
  const category = useParams().category;
  const [sort, setSort] = useState("asc");
  const [opened, setOpened] = useState(true);
  const { data, loading, error } = useFetch(
    `${baseUrl}/products/category/${category}`
  );
  // console.log(data?.products);
  const [maxPrice, setMaxPrice] = useState(200);
  return (
    <div className="productsPage">
      <BsFilter
        size={50}
        className="filterIcon"
        onClick={(e) => setOpened((preOpen) => !preOpen)}
      />
      {opened && (
        <div className="left">
          <div className="filterItem">
            <h2>filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={500}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                name="price"
                id="asc"
                value="asc"
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor="asc">Price(Lowest First)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                name="price"
                id="desc"
                value="desc"
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor="desc">Price(Highest First)</label>
            </div>
          </div>
        </div>
      )}

      <div className="right">
        <List
          category={category}
          sort={sort}
          maxPrice={maxPrice}
          item={data?.products}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Products;
