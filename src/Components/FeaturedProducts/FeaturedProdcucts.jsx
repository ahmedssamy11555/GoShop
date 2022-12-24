import "./FeaturedProdcucts.scss";
import Card from "../Card/Card";
import { baseUrl } from "../../hooks/useFetch";
import useFetch from "../../hooks/useFetch";
import Spinner from "../spinner/Spinner";

const FeaturedProdcucts = ({ type, category }) => {
  const { data, loading, error } = useFetch(
    `${baseUrl}/products/category/${category}`
  );
  console.log(data);
  return (
    <div className="products">
      <div className="top">
        <h1>{type} Products</h1>
      </div>
      <div className="bottom">
        {error ? (
          "Somthing Went Wrong"
        ) : loading ? (
          <Spinner />
        ) : (
          data?.products.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProdcucts;
