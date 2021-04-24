/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import useSWR from 'swr';
import { api } from '../services/api';

export function useFecth<Data = any, Error = any>(url: string) {
  const [loading, setLoading] = useState(false);

  const { data } = useSWR<Data, Error>(url, async apiUrl => {
    setLoading(true);

    const response = await api.get(apiUrl);

    setLoading(false);

    return response.data;
  });

  return { data, loading };
}
