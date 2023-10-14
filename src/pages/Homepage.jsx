import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsArrowUpRight } from "react-icons/bs";
function Homepage() {
  return (
    <>
      <div className="fixed bg-white z-40 w-full">
        <Navbar />
      </div>
      <hr />
      <div className="px-12 gap-44 items-center flex justify-center h-screen w-full bg-[url('./images/homebg.png')] home">
        <div>
          <h1 className="text-6xl w-3/5 pr-20 text-[#24387a] font-semibold">
            Your Help Matters,
            <br />
            No Matter How Big Or Small.
          </h1>
          <p className="w-1/2 mt-8 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officiis minus soluta, ex inventore earum eius repellat? Quibusdam facilis, accusantium ut iste esse adipisci pariatur libero velit nostrum. Quis, maiores.</p>
          <div className="h-auto flex gap-6 py-6 w-96 ">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 py-1 rounded-full bg-[#24387a]">
              Donate Now <BsArrowUpRight />
            </button>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 rounded-full border-[#24387a]">
              view Our Work
            </button>
          </div>
        </div>
        <div className="h-96 sideimg w-96 overflow-hidden border-8 border-black rounded-full">
          <img
            className="h-full w-full"
            src="https://miro.medium.com/max/2400/1*ZxLhGkK2Xn4EptAZP4TIrg.jpeg"
            alt=""
          />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Homepage;
