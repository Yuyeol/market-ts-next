import { useState } from "react";
interface TUseMutationReturn {
  mutation: (data: any) => void;
  data: undefined | any;
  error: undefined | any;
  loading: boolean;
}
export const useMutation = (url: string): TUseMutationReturn => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(data);

  const mutation = async (data: any) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  return { mutation, data, error, loading };
};
