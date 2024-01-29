//icons
import { BsCaretRightFill } from "react-icons/bs";
//
import axios from "axios";
import { useEffect, useState } from "react";

//images
import img from "../images/img.png";
import btn from "../images/btn.svg";
const Home = () => {
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
    <div className="text-white">
      <div className=" bg-[url('./images/Sub.png')] w-[1920px] h-[860px] mt-[-100px]"></div>
      <div className="text-center">
        <h1 className="text-[58px]">The Best Streaming Experience</h1>
        <br />
        <p className="text-[18px]">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With <br /> StreamVibe,
          you can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. <br /> You
          can also create your own watchlists, so you can easily find the
          content you want to watch.
        </p>
        <button className=" w-[251px] h-[64px] text-center items-center bg-btn  rounded-[8px] mt-[50px]">
          <BsCaretRightFill className="w-[28px] h-[28px]  ml-[20px]" />
          <p className="text-[18px] mt-[-28px] ml-[20px]">Start Watching Now</p>
        </button>
      </div>
      <main className="mt-[200px] ml-[162px]">
        <div className="flex items-end">
          <div className="">
            <h2 className="text-[38px]">
              Explore our wide variety of categories
            </h2>
            <p className="text-[18px]">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>
          <img className="ml-[270px]" src={btn} alt="" />
        </div>
      </main>

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
                  <div className=" ">
                    <h1 className="text-[24px]">{element.original_title}</h1>
                  </div>
                </div>
              }
            </div>
          );
        })}
      </div>
      {/* // */}
      <div className="  mt-[150px]   ml-[162px]">
        <div className="flex justify-between items-end">
          <div className="">
            <h2 className="text-[38px]">Frequently Asked Questions</h2>
            <p className="mt-[14px] text-[18px]">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className=" bg-btn rounded-[8px] w-[176px] h-[63px] text-[18px] mr-[212px]">
            Ask a Question
          </button>
        </div>
        <img className="mt-[80px]" src={img} alt="" />
      </div>
      {/* // */}

      {/* // */}
      <div className="w-[1596px]    mt-[100px] ml-[162px] h-[618px] text-white">
        <div className=" flex justify-between items-end ">
          <div className="">
            <h1 className="text-[48px]">
              Choose the plan that's right for you
            </h1>
            <p className="mt-[14px]">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
          <div className="flex border border-nav w-[237px] h-[75px] items-center rounded-[10px] bg-black">
            <button className=" ml-[10px] w-[118px] h-[55px] bg-nav  rounded-[10px] ">
              Monthly
            </button>
            <button className="w-[99px] h-[55px]  ">Yearly</button>
          </div>
        </div>
        <div className="mt-[80px] flex">
          <div className="w-[512px] h-[425px] rounded-[12px] bg-nav">
            <h2 className="text-[24px]  ml-[50px]  mt-[50px] ">Basic Plan</h2>
            <p className="mt-[16px]  ml-[50px] ">
              Enjoy an extensive library of movies and shows, <br /> featuring a
              range of content, including recently <br /> released titles.
            </p>
            <div className="flex items-center  ml-[50px]  mt-[50px] ">
              <h3 className="text-[40px]">$9.99</h3>
              <span>/month</span>
            </div>
            <div className=" ml-[50px]  mt-[50px] ">
              <button className="bg-black w-[196px] h-[63px] rounded-[8px]">
                Start Free Trial
              </button>
              <button className="bg-btn w-[196px] h-[63px] ml-[20px] rounded-[8px]">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="w-[512px] ml-[30px] h-[425px] rounded-[12px] bg-nav ">
            <h2 className="text-[24px]  ml-[50px]  mt-[50px] ">
              Standard Plan
            </h2>
            <p className="mt-[16px]  ml-[50px] ">
              Enjoy an extensive library of movies and shows, <br /> featuring a
              range of content, including recently <br /> released titles.
            </p>
            <div className="flex items-center  ml-[50px]  mt-[50px] ">
              <h3 className="text-[40px]">$12.99</h3>
              <span>/month</span>
            </div>
            <div className=" ml-[50px]  mt-[50px] ">
              <button className="bg-black w-[196px] h-[63px] rounded-[8px]">
                Start Free Trial
              </button>
              <button className="bg-btn w-[196px] h-[63px] ml-[20px] rounded-[8px]">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="w-[512px] h-[425px] rounded-[12px] ml-[30px] bg-nav ">
            <h2 className="text-[24px]  ml-[50px]  mt-[50px] ">Premium Plan</h2>
            <p className="mt-[16px]  ml-[50px] ">
              Enjoy an extensive library of movies and shows, <br /> featuring a
              range of content, including recently <br /> released titles.
            </p>
            <div className="flex items-center  ml-[50px]  mt-[50px] ">
              <h3 className="text-[40px]">$14.99</h3>
              <span>/month</span>
            </div>
            <div className=" ml-[50px]  mt-[50px] ">
              <button className="bg-black w-[196px] h-[63px] rounded-[8px]">
                Start Free Trial
              </button>
              <button className="bg-btn w-[196px] h-[63px] ml-[20px] rounded-[8px]">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // */}
    </div>
  );
};
export default Home;
