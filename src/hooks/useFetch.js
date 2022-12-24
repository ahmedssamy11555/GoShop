import axios from "axios";
import { useEffect, useState } from "react";

export const baseUrl = "https://dummyjson.com";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);

        setData(res.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;

// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15
