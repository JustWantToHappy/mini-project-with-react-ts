import React from "react";
import { withApiData } from "../../hoc";
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

type ResponseApiType = {
  page: number;
  results: Array<{
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
    overview: string;
  }>;
  total_pages: number;
  total_results: number;
}

interface IProps {
  data: ResponseApiType
}
// eslint-disable-next-line react-refresh/only-export-components
const Index: React.FC<IProps> = (props) => {
  const { results } = props?.data || {};
  const [search, setSearch] = React.useState("");
  const formRef = React.useRef<HTMLFormElement>(null);



  React.useEffect(() => {
    const handleSubmit = (event: MouseEvent) => {
      event.preventDefault();
    }

    formRef.current?.addEventListener("submit", handleSubmit);
    return function () {
      formRef.current?.removeEventListener("submit", handleSubmit);
    }
  }, []);

  return (
    <div className="bg-[#22254b] m-0">
      <header className="p-4 flex justify-end bg-[#373b69]">
        <form ref={formRef}>
          <input type="text" className="bg-transparent border-2 border-[#22254b] rounded-3xl text-white text-sm p-2 focus:bg-[#22254b] placeholder-[#7378c5]" placeholder='Search' name="search" onChange={event => setSearch(event.target.value)} value={search} />
        </form>
      </header>
      <main className="flex flex-wrap justify-start">
        {results?.map(movie => <div
          key={movie.id}
          className="w-72 group m-4 relative overflow-hidden shadow-2xl bg-[#373b69] rounded-md"
        >
          <img src={IMG_PATH + movie.poster_path} alt={movie.title} className="w-full" />
          <div className="text-white flex items-center justify-between gap-2 pt-4 pb-8 px-4 tracking-wide font-bold">
            <h3 className="mt-0">{movie.title}</h3>
            <span className={`bg-[#22254b] py-2 px-4 rounded-md font-bold ${movie.vote_average >= 8 ? "text-green-500" : movie.vote_average >= 5 ? "text-orange-500" : "text-red-500"}`}>{movie.vote_average}</span>
          </div>
          <div
            className="bg-white  p-8 absolute left-0 bottom-0 right-0 max-w-full overflow-y-auto transition-transform duration-300 ease-in translate-y-[100%] group-hover:translate-y-0 text-sm"
          >
            <h3 className="font-extrabold pb-4">Overview</h3>
            {movie.overview}
          </div>
        </div>)
        }
      </main >
    </div >
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withApiData(Index, { method: "GET", url: API_URL });