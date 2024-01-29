import axios from "axios";
import { useEffect, useState } from "react";

export default function Movies() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params:{
        api_key:"4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then(function (response) {
        if (response.status !== 200) throw new Error("Could not fetch");
        return setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap ml-[162px] mt-[60px]">
        {data?.map((element) => {
          return (
            <div className="">
              {
                <div className=" ">
                  <div className=" ">
                    <img
                      className="rounded-[10px] p-6 "
                      src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`}
                      alt={element.name}
                    />
                  </div>
                  <div className="ml-[30px] text-white">
                    <h1 className="text-[24px]">{element.original_title}</h1>
                  </div>
                </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
