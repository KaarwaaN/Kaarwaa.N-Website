import { BsArrowUpRight } from "react-icons/bs";
function Navbar() {
  return (
    <>
    <div className="h-20 w-full flex flex-row justify-between items-center px-32">
        <ul className="flex text-[#24387a] font-semibold justify-start items-center gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Work</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex gap-2 items-center">
          <img className="h-12" src="./images/karwaanlogo.png" alt="" />
          <h1 className="text-2xl text-[#24387a] font-semibold">Kaarwaa.N</h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
    <input type="search" placeholder="search here.." className=" py-1 p-4 w-64 border-slate-200 border-2 rounded-full" />
        <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 rounded-full border-[#24387a]">Donate Now <BsArrowUpRight/></button>
        </div>
    </div>
    
    </>
  )
}

export default Navbar