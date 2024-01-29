import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//images
import Logo from "./images/logo.svg";
//icons
import { IoSearch } from "react-icons/io5";
import { GoBell } from "react-icons/go";

//components
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Support from "./pages/Support";
import Subscriptions from "./pages/Subscriptions";
export default function App() {
  return (
    <div className="mx-auto  bg-tree w-[1920px]">
      <BrowserRouter>
        <nav className="flex items-center  ">
          <img className="ml-[160px]" src={Logo} />
          <ul className="border ml-[322px] flex rounded-[12px] w-[555px] h-[75px]   bg-black items-center border-nav text-white">
            <li className="p-[10px]  ml-[10px]    ">
              <Link className="focus:bg-nav rounded-[8px] p-[14px] " to="/">
                Home
              </Link>
            </li>
            <li className="p-[10px]  ml-[30px]">
              <Link
                className="focus:bg-nav rounded-[8px] p-[14px] "
                to="/movies"
              >
                Movies
              </Link>
            </li>
            <li className="p-[10px]   ml-[30px]">
              <Link
                className="focus:bg-nav rounded-[8px] p-[14px] "
                to="/support"
              >
                Support
              </Link>
            </li>
            <li className="p-[10px]   ml-[30px]">
              <Link
                className="focus:bg-nav rounded-[8px] p-[14px] "
                to="/subscriptions"
              >
                Subscriptions
              </Link>
            </li>
          </ul>
          <IoSearch className="text-white w-[34px]  h-[34px] ml-[423px]" />
          <GoBell className="text-white w-[34px] h-[34px] ml-[30px]" />
        </nav>
        <div className="text-center text-white">
          <input
            className="bg-nav px-4 w-[270px] h-[35px] mt-[15px] border border-btn rounded-[8px]"
            type="search"
            placeholder="Search"
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
