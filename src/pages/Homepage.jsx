import Navbar from "../components/Navbar";
import { BsArrowUpRight } from "react-icons/bs";
function Homepage() {
  return (
    <>
      <div className=" w-full">
        <Navbar />
      </div>
      <hr />
      <div className="px-12 gap-44 items-center flex justify-center h-screen w-full bg-[url('./images/homebg.png')] home">
        <div>
          <h1 className="text-6xl text-[#24387a] font-semibold">
            Your Help Matters,
            <br />
            No Matter How Big Or Small.
          </h1>
          <div className="h-auto flex gap-6 py-12 w-96 ">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 py-1 rounded-full bg-[#24387a]">
              Donate Now <BsArrowUpRight />
            </button>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 rounded-full border-[#24387a]">
              view Our Work
            </button>
          </div>
        </div>
        <div className="h-96 w-96 bg-red-400 overflow-hidden border-8 border-black rounded-full">
          <img
            className="h-full w-full"
            src="https://miro.medium.com/max/2400/1*ZxLhGkK2Xn4EptAZP4TIrg.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
