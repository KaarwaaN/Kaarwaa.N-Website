import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsArrowUpRight } from "react-icons/bs";
function Homepage() {
  return (
    <>
      <div className="fixed navbar bg-white z-40 w-full">
        <Navbar />
      </div>

    {/* home page  */}
      <div className="px-12 gap-44 items-center flex justify-center h-screen w-full bg-[url('./images/homebg.png')] home">
        <div className="pl-20">
          <h1 className="text-6xl w-3/5 pr-20 text-[#24387a] font-semibold">
            Your Help Matters,
            <br />
            No Matter How Big Or Small.
          </h1>
          <p className="w-1/2 mt-8 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis minus soluta, ex inventore earum eius repellat? Quibusdam
            facilis, accusantium ut iste esse adipisci pariatur libero velit
            nostrum. Quis, maiores.
          </p>
          <div className="h-auto flex gap-6 py-6 w-96 ">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 py-1 rounded-full bg-[#24387a]">
              Donate Now <BsArrowUpRight />
            </button>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 rounded-full border-[#24387a]">
              View Our Work
            </button>
          </div>
        </div>
        <div className="h-96 sideimg w-96 overflow-hidden border-8 border-black rounded-full">
          {/* <img
            className="h-full w-full"
            src="https://imgs.search.brave.com/v5oJc4ZJrb6I4eq15gzv-T4XNMKwdNIXaaLG83y0_ZQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/ODg1MjE3ODc5OTEt/ZWQ3YmJhYWU3NzNj/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/amIyeHNaV04wYVc5/dUxYQmhaMlY4TVRk/OE1URXhOalV6Tkh4/OFpXNThNSHg4Zkh4/OCZ3PTEwMDAmcT04/MA"
            alt=""
          /> */}
        </div>
      </div>


      {/* about us page */}
      <div className="flex my-20 flex-row">
        <div className="flex flex-col w-1/2">
        <div className="w-full py-4 p-12 pl-32 h-full flex items-start text-white flex-col bg-[#24387a]">
          <h1 className="py-3">About Us</h1>
          <h1 className="text-4xl font-semibold">
            Helping People In <br />
            Need Around The World
          </h1>
        </div>
        <div className="w-full py-4 p-12 pl-32 h-full">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sit quia doloremque, quisquam harum consequatur debitis expedita
            dolorum maxime temporibus pariatur ratione velit quibusdam ullam
            fuga hic deleniti at error.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sit quia doloremque, quisquam harum consequatur debitis expedita
            dolorum maxime temporibus pariatur ratione velit quibusdam ullam
            fuga hic deleniti at error.
          </p>

          <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 my-10 py-1 rounded-full bg-[#24387a]">Learn More <BsArrowUpRight /></button>
        </div>
        </div>
        <div className="aboutimage bg- h-96 w-1/2">
          <div className="h-40 w-full bg-[#24387a]"></div>
          <img className="-translate-y-16" src="https://imgs.search.brave.com/ja4k5TM1dYkUiwKpscJHz1Iu259-i1hmDGKRq327ydo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/YXBtY2RuLm9yZy85/ZDRkMDc2ZTgyZDg3/ZjEwOWM5NDU0MDQ3/OTZlNDlkYjE0MDc4/OGIyL3dpZGVzY3Jl/ZW4vYTZjNmMyLTIw/MjIwOTA3LW5vcnRo/aWdoc2Nob29sZm9v/dGJhbGwzMDMtNjAw/LmpwZw" alt="" />
        </div>
      </div>

    
    

    
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
