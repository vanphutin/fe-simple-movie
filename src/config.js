import useSWR from "swr";

export const fetcher = (url) => fetch(url).then((r) => r.json());
export const API_KEY = "api_key=5870f3c945af319893fa3a4452cc3991";
