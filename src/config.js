import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((r) => r.json());
