"use client";

import BeerList from "@/components/BeerList";
import Pagination from "@/components/Pagination";
import { beerUrl } from "@/endpoints/endpoints";
import { IBeer } from "@/models/IBeer";
import { useEffect, useState } from "react";

const Regular = () => {
  const [beers, setBeers] = useState<IBeer[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [total, setTotal] = useState<number>(25);
  const [error, setError] = useState<boolean>(false);

  async function fetchBeers() {
    setIsLoading(true);

    try {
      const res = await fetch(`${beerUrl}?page=${page}&per_page=${perPage}`);

      if (res.ok) {
        const data = await res.json();
        setBeers(data);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBeers();
  }, [page]);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container">
      <h3>Regular</h3>
      <br />

      <BeerList data={beers} />
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

export default Regular;
