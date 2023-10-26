import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Aboutus = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <div className="pt-16 md:pt-24 md:p-32 md:justify-center md:gap-32 gap-4 p-4 h-full justify-center items-center flex-col flex w-full md:flex-row">
      <div className="">
        <h1 className="font-semibold text-center md:text-left text-4xl mb-2">Child Education</h1>
        <p className="text-sm mb-4 font-semibold text-center md:text-left">“Education is not the filling of a pail, but the lighting of a fire.” ~ William Butler Yeats</p>
        <p className="md:text-left text-center">Every year Kaarwaa.N conducts teaching sessions for the preparation of several examinations like Navodaya, Gyanodaya & Samodaya for underpriveleg kids. Kaarwaa.N conduct these sessions in several local schools. This is done to help children enrol in schools with good study programmes, which they could otherwise not get into. The children are provided with study material and stationery from the organizers and the alumini of Kaarwaan.</p>
      </div>
      <div className="w-80 flex justify-center flex-col h-full">
        <Carousel  responsive={responsive}>

       <div className="h-full flex-col items-center flex justify-center w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_1.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_2.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_3.jpg" alt="" />
       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_4.jpg" alt="" />
       </div>

        </Carousel>
        <h1 className="text-xl text-center font-semibold">Teaching sessions for Kids</h1>
      </div>
    </div>
    
  
    <div className="pt-16 md:pt-24 md:p-32 md:justify-center md:gap-32 gap-4 p-4 h-full justify-center items-center flex-col flex w-full md:flex-row">
      <div className="">
        <h1 className="font-semibold text-center md:text-left text-4xl mb-2">Child Education</h1>
        <p className="text-sm mb-4 font-semibold text-center md:text-left">“Education is not the filling of a pail, but the lighting of a fire.” ~ William Butler Yeats</p>
        <p className="md:text-left text-center">Every year Kaarwaa.N conducts teaching sessions for the preparation of several examinations like Navodaya, Gyanodaya & Samodaya for underpriveleg kids. Kaarwaa.N conduct these sessions in several local schools. This is done to help children enrol in schools with good study programmes, which they could otherwise not get into. The children are provided with study material and stationery from the organizers and the alumini of Kaarwaan.</p>
      </div>
      <div className="w-80 flex justify-center flex-col h-full">
        <Carousel  responsive={responsive}>

       <div className="h-full flex-col items-center flex justify-center w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_1.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_2.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_3.jpg" alt="" />
       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_4.jpg" alt="" />
       </div>

        </Carousel>
        <h1 className="text-xl text-center font-semibold">Teaching sessions for Kids</h1>
      </div>
    </div>
    
  
    <div className="pt-16 md:pt-24 md:p-32 md:justify-center md:gap-32 gap-4 p-4 h-full justify-center items-center flex-col flex w-full md:flex-row">
      <div className="">
        <h1 className="font-semibold text-center md:text-left text-4xl mb-2">Child Education</h1>
        <p className="text-sm mb-4 font-semibold text-center md:text-left">“Education is not the filling of a pail, but the lighting of a fire.” ~ William Butler Yeats</p>
        <p className="md:text-left text-center">Every year Kaarwaa.N conducts teaching sessions for the preparation of several examinations like Navodaya, Gyanodaya & Samodaya for underpriveleg kids. Kaarwaa.N conduct these sessions in several local schools. This is done to help children enrol in schools with good study programmes, which they could otherwise not get into. The children are provided with study material and stationery from the organizers and the alumini of Kaarwaan.</p>
      </div>
      <div className="w-80 flex justify-center flex-col h-full">
        <Carousel  responsive={responsive}>

       <div className="h-full flex-col items-center flex justify-center w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_1.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_2.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_3.jpg" alt="" />
       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_4.jpg" alt="" />
       </div>

        </Carousel>
        <h1 className="text-xl text-center font-semibold">Teaching sessions for Kids</h1>
      </div>
    </div>
    
  
    <div className="pt-16 md:pt-24 md:p-32 md:justify-center md:gap-32 gap-4 p-4 h-full justify-center items-center flex-col flex w-full md:flex-row">
      <div className="">
        <h1 className="font-semibold text-center md:text-left text-4xl mb-2">Child Education</h1>
        <p className="text-sm mb-4 font-semibold text-center md:text-left">“Education is not the filling of a pail, but the lighting of a fire.” ~ William Butler Yeats</p>
        <p className="md:text-left text-center">Every year Kaarwaa.N conducts teaching sessions for the preparation of several examinations like Navodaya, Gyanodaya & Samodaya for underpriveleg kids. Kaarwaa.N conduct these sessions in several local schools. This is done to help children enrol in schools with good study programmes, which they could otherwise not get into. The children are provided with study material and stationery from the organizers and the alumini of Kaarwaan.</p>
      </div>
      <div className="w-80 flex justify-center flex-col h-full">
        <Carousel  responsive={responsive}>

       <div className="h-full flex-col items-center flex justify-center w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_1.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_2.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_3.jpg" alt="" />
       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_4.jpg" alt="" />
       </div>

        </Carousel>
        <h1 className="text-xl text-center font-semibold">Teaching sessions for Kids</h1>
      </div>
    </div>
    
  
    <div className="pt-16 md:pt-24 md:p-32 md:justify-center md:gap-32 gap-4 p-4 h-full justify-center items-center flex-col flex w-full md:flex-row">
      <div className="">
        <h1 className="font-semibold text-center md:text-left text-4xl mb-2">Child Education</h1>
        <p className="text-sm mb-4 font-semibold text-center md:text-left">“Education is not the filling of a pail, but the lighting of a fire.” ~ William Butler Yeats</p>
        <p className="md:text-left text-center">Every year Kaarwaa.N conducts teaching sessions for the preparation of several examinations like Navodaya, Gyanodaya & Samodaya for underpriveleg kids. Kaarwaa.N conduct these sessions in several local schools. This is done to help children enrol in schools with good study programmes, which they could otherwise not get into. The children are provided with study material and stationery from the organizers and the alumini of Kaarwaan.</p>
      </div>
      <div className="w-80 flex justify-center flex-col h-full">
        <Carousel  responsive={responsive}>

       <div className="h-full flex-col items-center flex justify-center w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_1.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_2.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_3.jpg" alt="" />
       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_4.jpg" alt="" />
       </div>

        </Carousel>
        <h1 className="text-xl text-center font-semibold">Teaching sessions for Kids</h1>
      </div>
    </div>
    
  
    <div className="pt-16 md:pt-24 md:p-32 md:justify-center md:gap-32 gap-4 p-4 h-full justify-center items-center flex-col flex w-full md:flex-row">
      <div className="">
        <h1 className="font-semibold text-center md:text-left text-4xl mb-2">Child Education</h1>
        <p className="text-sm mb-4 font-semibold text-center md:text-left">“Education is not the filling of a pail, but the lighting of a fire.” ~ William Butler Yeats</p>
        <p className="md:text-left text-center">Every year Kaarwaa.N conducts teaching sessions for the preparation of several examinations like Navodaya, Gyanodaya & Samodaya for underpriveleg kids. Kaarwaa.N conduct these sessions in several local schools. This is done to help children enrol in schools with good study programmes, which they could otherwise not get into. The children are provided with study material and stationery from the organizers and the alumini of Kaarwaan.</p>
      </div>
      <div className="w-80 flex justify-center flex-col h-full">
        <Carousel  responsive={responsive}>

       <div className="h-full flex-col items-center flex justify-center w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_1.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_2.jpg" alt="" />

       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_3.jpg" alt="" />
       </div>

       <div className="h-full w-80">
        <img src="https://kaarwaan.github.io/child_education/img/card_img_4.jpg" alt="" />
       </div>

        </Carousel>
        <h1 className="text-xl text-center font-semibold">Teaching sessions for Kids</h1>
      </div>
    </div>
    
  
    
    </>
  )
}

export default Aboutus
