import React, { useEffect, useState } from "react";
import MovieList from "../components/movies/MovieList";
import useSWR from "swr";
import { API_KEY, fetcher } from "../config";
import MovieCart from "../components/movies/MovieCart";
import { IoIosSearch } from "react-icons/io";
import useDebounce from "../hooks/useDebounce";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";

//
const totalPage = 5;
const itemsPerPage = 1000;
const MoviePage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?${API_KEY}&page=${nextPage}`
  );
  const { data, error } = useSWR(url, fetcher);

  const handleFilterChanger = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?${API_KEY}&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);

  const movies = data?.results || [];
  const isLoading = !data && !error;
  console.log("data >>", data);
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <div className="p-10 page-container">
      <div
        className="flex mb-10
      "
      >
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here t osearch ..."
            onChange={handleFilterChanger}
          />
        </div>
        <button
          className="p-4
           bg-primary text-white"
        >
          <IoIosSearch />
        </button>
      </div>
      {isLoading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!isLoading &&
          movies &&
          movies.length > 0 &&
          movies.map((item, index) => (
            <MovieCart key={index + 1} item={item} />
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="paginate"
        />
      </div>
      <div className="flex items-center justify-center mb-10 gap-x-5 pt-5 hidden">
        <span
          className="cursor-pointer"
          onClick={() => setNextPage(nextPage - 1)}
        >
          <GrFormPrevious className="text-3xl" />
        </span>
        {new Array(totalPage).fill(0).map((item, index) => (
          <span
            className="cursor-pointer leading-none inline-block p-3 bg-white text-slate-900 rounded "
            key={index + 1}
            onClick={() => setNextPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}

        <span
          className="cursor-pointer"
          onClick={() => setNextPage(nextPage + 1)}
        >
          <MdNavigateNext className="text-3xl" />
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
