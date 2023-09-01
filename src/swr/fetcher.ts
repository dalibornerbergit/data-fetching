import { IArgs } from "@/models/IArgs";

export const fetcher = async (...args: IArgs) => {
  const res = await fetch(...args);

  if (!res.ok) {
    throw new Error("HTTP error");
  }

  return res.json();
};
