import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, IPHONE } from "../utils/constants";

const options = {};

export const useGetAll = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(API_URL + IPHONE, options);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return { data, error };
};
