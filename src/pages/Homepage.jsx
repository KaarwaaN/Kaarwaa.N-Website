// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsArrowUpRight } from "react-icons/bs";
// import Tshirt from "../components/Tshirt";
// import Testimonials from "../components/Testimonials";
// import CreateDonationForm from "../components/Forms/FinancialHelpForm";
// import DonationSection from "../components/Donations";

function Homepage() {
  return (
    <>
      <div className="fixed navbar bg-white z-40 w-full">
        <Navbar />
      </div>

      {/* home page  */}
      <div className="px-12 gap-44 items-center flex justify-center h-screen w-full bg-[url('./images/homebg.png')] home">
        <div className="pl-20 taglinediv">
          <h1 className="text-6xl tagline w-3/5 pr-20 text-[#24387a] font-semibold">
         <span className="kaarwaanbg"> Kaarwaa.N...</span><br />
A step for the welfare of another India.
          </h1>
          <p className="w-1/2 homepara mt-8 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis minus soluta, ex inventore earum eius repellat? Quibusdam
            facilis, accusantium ut iste esse adipisci pariatur libero velit
            nostrum. Quis, maiores.
          </p>
          <div className="h-auto flex justify-center gap-6 py-6 w-96 ">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 py-1 rounded-full bg-[#24387a] hover:bg-white hover:text-[#24387a] duration-300 hover:border-2 hover:border-[#24387a]">
              Donate Now <BsArrowUpRight />
            </button>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 rounded-full border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
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
      <div className="flex aboutdiv my-20 flex-row">
        <div className="flex detailsdiv flex-col w-1/2">
          <div className="w-full py-4 p-12 pl-32 h-full flex items-start abouthread text-white flex-col bg-[#24387a]">
            <h1 className="py-3">About Us</h1>
            <h1 className="text-4xl font-semibold">
             A glimpse at Kaarwaa.N
            </h1>
          </div>
          <div className="w-full aboutdetails py-4 p-12 pl-32 h-full">
            <p>
            Kaarwaa.N is a social welfare association founded by the students of Jabalpur Engineering College (JEC), Jabalpur. We are dedicated to help poor, underprivileged, downtrodden sections of the society. The primary aim of Kaarwaa.N is to tutor students for the JNV (Jawahar Navodaya Vidhyalaya) Entrance Exam and encourage “girls’ education”.
            </p>
            <p>
            We organize innumerous activities to help the marginalized and create awareness about various social issues. Addressing issues from health and hygiene to education and environment, the members of Kaarwaa.N believe in working towards making this world a better place.
            </p>

            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 my-10 py-1 rounded-full bg-[#24387a]">
              Learn More <BsArrowUpRight />
            </button>
          </div>
        </div>
        <div className="aboutimage h-96 w-1/2">
          <div className="h-40 w-full imagebgdiv bg-[#24387a]"></div>
          <img
            className="-translate-y-16 image -translate-x-8"
            src="./images/aboutusimage.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center h-full text-white w-full px-32 py-12 bg-[#24387a] programbg">
        <h1 className="text-4xl text-center">Program To Empower Others</h1>
        <p className="programdata text-center w-2/3 text-sm mt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ipsa!
          Possimus, tempora! Expedita dicta quasi quidem accusantium temporibus
          repudiandae voluptate odio, distinctio nesciunt, quam eum, provident
          mollitia corrupti quisquam praesentium!
        </p>
        <div className="w-2/3 programdata my-10 gap-4 flex-row flex justify-center ">
          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-4xl">24</h1>
            <p className="text-sm">Aryan Tyagi</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-4xl">24</h1>
            <p className="text-sm">Aryan Tyagi</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-4xl">24</h1>
            <p className="text-sm">Aryan Tyagi</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center">
            <h1 className="text-4xl">24</h1>
            <p className="text-sm">Aryan Tyagi</p>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-semibold my-12 mt-32 text-center text-[#24387a]">
        Introduce Your Featured <br />
        Now Profit Causes
      </h1>
      <div className="w-full flex-wrap cards my-12 justify-center px-32 flex gap-12 h-full">
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgs.search.brave.com/r3E3JuoUQ6zx-cbhlxj9jrQFItKsWXzHULDpDG0C2ng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F2ZXRoZWNoaWxk/cmVuLm9yZy9jb250/ZW50L2RhbS91c2Ev/aW1hZ2VzL2Rvbm9y/cy96aW1iYWJ3ZS1m/b29kLWNyaXNpcy1j/aDE0MjA1NDItc3Eu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs/LmltZy5qcGc"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Nukkad Natak:
            </h1>
            <p className="px-4 pb-2">
            Nukkad nataks - a form of street theater performed by the members to create an awareness amongst people regarding various social issues. 
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgs.search.brave.com/r3E3JuoUQ6zx-cbhlxj9jrQFItKsWXzHULDpDG0C2ng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F2ZXRoZWNoaWxk/cmVuLm9yZy9jb250/ZW50L2RhbS91c2Ev/aW1hZ2VzL2Rvbm9y/cy96aW1iYWJ3ZS1m/b29kLWNyaXNpcy1j/aDE0MjA1NDItc3Eu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs/LmltZy5qcGc"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Blood Donation:  
            </h1>
            <p className="px-4 pb-2">
            “A single drop of blood can make a huge difference.”  Every day thousands of lives are saved when someone donates blood. Contributing to this noble cause, Kaarwaa.N organizes blood donation camps.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgs.search.brave.com/r3E3JuoUQ6zx-cbhlxj9jrQFItKsWXzHULDpDG0C2ng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F2ZXRoZWNoaWxk/cmVuLm9yZy9jb250/ZW50L2RhbS91c2Ev/aW1hZ2VzL2Rvbm9y/cy96aW1iYWJ3ZS1m/b29kLWNyaXNpcy1j/aDE0MjA1NDItc3Eu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs/LmltZy5qcGc"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Plantation: 
            </h1>
            <p className="px-4 pb-2">
            “He who plants a tree, plants a hope.” Deforestation is a severe threat to the environment. In order to curb the consequences of deforestation, Kaarwaa.N conducts plantation drives wherein saplings are planted in different institutions. It is conducted in association with municipal corporation.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgs.search.brave.com/r3E3JuoUQ6zx-cbhlxj9jrQFItKsWXzHULDpDG0C2ng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F2ZXRoZWNoaWxk/cmVuLm9yZy9jb250/ZW50L2RhbS91c2Ev/aW1hZ2VzL2Rvbm9y/cy96aW1iYWJ3ZS1m/b29kLWNyaXNpcy1j/aDE0MjA1NDItc3Eu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs/LmltZy5qcGc"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Clothes distribution: 
            </h1>
            <p className="px-4 pb-2">
            Clothes distribution: Kaarwaa.N frequently donates clothes to the less fortunate ones. The clothes are received from households and then distributed to the needy by volunteers.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgs.search.brave.com/r3E3JuoUQ6zx-cbhlxj9jrQFItKsWXzHULDpDG0C2ng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F2ZXRoZWNoaWxk/cmVuLm9yZy9jb250/ZW50L2RhbS91c2Ev/aW1hZ2VzL2Rvbm9y/cy96aW1iYWJ3ZS1m/b29kLWNyaXNpcy1j/aDE0MjA1NDItc3Eu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs/LmltZy5qcGc"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Orphanage visits: 
            </h1>
            <p className="px-4 pb-2">
            Orphanage visits: The members of Kaarwaa.N occasionally visit the orphanage to spend time with the misfortunate ones/those robbed of parental love and guidance. We organize various fun activities to engage the children and refresh them. We try to fill their lives with a little love and care and encourage these young souls to strive in their lives. 
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src="https://imgs.search.brave.com/r3E3JuoUQ6zx-cbhlxj9jrQFItKsWXzHULDpDG0C2ng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F2ZXRoZWNoaWxk/cmVuLm9yZy9jb250/ZW50L2RhbS91c2Ev/aW1hZ2VzL2Rvbm9y/cy96aW1iYWJ3ZS1m/b29kLWNyaXNpcy1j/aDE0MjA1NDItc3Eu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs/LmltZy5qcGc"
            alt=""
          />
          <div className="detailstoshow bg-white">
            <h1 className="text-xl p-4 font-semibold text-[#24387a]">
            Preparing students for entrance exam:
            </h1>
            <p className="px-4 pb-2">
            Kaarwaa.N aims to shine light in the dark corners of the underprivileged by educating them for these life changing exams. Over the years members of Kaarwaa.N have volunteered to tutor the students from nearby schools nurturing their minds and shaping their future.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* <div className="">
        <Tshirt />
      </div> */}

      {/* <div>
      <DonationSection/>
       <Testimonials/>
        <Footer />
      </div> */}
    </>
  );
}

export default Homepage;
