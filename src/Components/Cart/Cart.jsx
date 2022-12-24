import React from "react";
import "./Cart.scss";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const total = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantitiy * item.price));
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.des?.substring(0, 100)}</p>
            <div className="price">
              {item.quantitiy} x ${item.price}
            </div>
          </div>
          <MdDeleteOutline
            className="delete"
            onClick={() =>
              dispatch(
                removeItem({
                  id: item.id,
                })
              )
            }
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${total()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
