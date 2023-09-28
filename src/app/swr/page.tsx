"use client";

import BeerList from "@/components/BeerList";
import Pagination from "@/components/Pagination";
import { beerUrl } from "@/endpoints/endpoints";
import { fetcher } from "@/swr/fetcher";
import { useState } from "react";
import useSWR from "swr";

const Swr = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [total, setTotal] = useState<number>(25);

  const { data, error, isLoading } = useSWR(
    `${beerUrl}?page=${page}&per_page=${perPage}`,
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      // revalidateOnMount: true,
    }
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container">
      <h3>SWR</h3>
      <br />

      <BeerList data={data} />
      <br />

      <Pagination
        page={page}
        setPage={setPage}
        perPage={perPage}
        total={total}
      />
    </div>
  );
};

export default Swr;
