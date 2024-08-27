import type { MetaFunction } from "@remix-run/node";
import Banner from "~/Component/Banner";
import Header from "~/Component/Header";
import MovieList from "~/Component/MovieList";
import { useState, useEffect } from "react";

// Meta function for SEO
export const meta: MetaFunction = () => {
  return [
    { title: "HneNetflix" },
    { name: "description", content: "Welcome to Hne's channel" },
  ];
};

export default function Index() {
  const [movie, setMovie] = useState([]); // Move state here
  const [movieRate, setMovieRate] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`, // Ensure correct usage of environment variable
        },
      };
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options)
      ]);

      // Call .json() method to parse the JSON response
      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };

    fetchMovie();
  }, []);

  return (
    <div className="font-sans p-10 bg-black">
      <Header />
      <Banner />
      <MovieList title={'Phim hot'} data={movie} /> 
      <MovieList title={'Phim đề cử'} data={movieRate} />
    </div>
  );
}
