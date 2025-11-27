import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, method = "get") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios[method](url);
        setData(response.data);
        setLoading(false); // need to be after the data
      } catch (error) {
        setError(error);
        setLoading(false); // need to be after the error
      }
    }
    fetchData(); // call the function
  }, [url]);

  return { data, loading, error };
};

export default useAxios;
