import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    // ...

    setMethod("POST");
    setItemId(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
        setMethod(null);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError("Houve um erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        setLoading(true);

        let fetchOptions = [url];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [url, method, itemId]);

  return { data, httpConfig, loading, error };
};
