import React, { useState } from "react";
import "./Product.scss";
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdAccountBalance,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import useFetch, { baseUrl } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { BsStarFill, BsStar } from "react-icons/bs";
import Rating from "react-rating";
import Spinner from "../../Components/spinner/Spinner";

const Product = () => {
  const id = useParams().id;
  const [quantitiy, setQuantity] = useState(1);
  const { data, loading } = useFetch(`${baseUrl}/products/${id}`);
  const dispatch = useDispatch();
  const [selectedimag, setSelectedImg] = useState(data?.thumbnail);

  return (
    <div className="product">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="left" key={data?.id}>
            <div className="images">
              {data?.images.map((imgurl) => (
                <img
                  key={imgurl.substring(40, 45)}
                  src={imgurl}
                  alt=""
                  onClick={(e) => setSelectedImg(e.target.src)}
                />
              ))}
            </div>
            <div className="mainImage">
              <img src={selectedimag ? selectedimag : data?.thumbnail} alt="" />
            </div>
          </div>
          <div className="right" key={data?.id + 1}>
            <h1>{data?.title}</h1>
            <span className="price">${data?.price}</span>
            <p>{data?.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantitiy}
              <button
                onClick={() =>
                  setQuantity((prev) =>
                    prev < data?.stock ? prev + 1 : data?.stock
                  )
                }
              >
                +
              </button>
            </div>
            <span className="stock">IN STOCK: {data?.stock}</span>
            <span className="rate">
              <span>Rating: </span>
              {
                <Rating
                  start={0}
                  stop={5}
                  emptySymbol={<BsStar />}
                  fullSymbol={<BsStarFill color="#ffe234" />}
                  initialRating={parseInt(data?.rating).toFixed(0)}
                />
              }
            </span>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data?.title,
                    desc: data?.description,
                    price: data?.price,
                    img: data?.thumbnail,
                    quantitiy: quantitiy,
                  })
                )
              }
            >
              <MdAddShoppingCart /> Add to Cart
            </button>
            <div className="links">
              <div className="item">
                <MdFavoriteBorder /> Add To Wish List
              </div>
              <div className="item">
                <MdAccountBalance /> Add To Compare
              </div>
            </div>
            <div className="info">
              <span>Product Type: {data?.category}</span>
              <span>Brand: {data?.brand}</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
