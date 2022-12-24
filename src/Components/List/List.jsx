import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import Spinner from "../spinner/Spinner";
const List = ({ sort, category, maxPrice, item, loading, error }) => {
  const filterd = item?.filter((item) => item.price <= maxPrice);

  return (
    <div className="list">
      {error ? (
        "error"
      ) : loading ? (
        <Spinner />
      ) : (
        filterd?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
