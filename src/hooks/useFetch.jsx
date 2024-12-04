import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url, customParams = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3/",
    url,
    params: {
      api_key: "e3ef60114f3455d412ea55db83f798b2",
      ...customParams,
    },
  };

  const {page, query} =customParams

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(options);
        setData(data);
        setLoading(false);
      } catch (error) {
          
          setError(error.message)
          setLoading(false)
      }
    };
    fetchData();
  },[page,query,url]);

  return [data, loading, error]
};
