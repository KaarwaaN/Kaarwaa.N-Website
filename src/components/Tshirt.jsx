import Spline from '@splinetool/react-spline';
import TshirtForm from './Forms/TshirtForm';

const Tshirt = () => {


  return (
    <>
      <h1 className='text-5xl z-0 translate-y-2 font-semibold text-center'>Get Your Karwaa.N Tshirt</h1>
      <div className='flex flex-col md:flex-row w-full gap-32 justify-center items-center'>
        <div className='w-full sm:w-1/2 h-full tshirtmob'>
          <Spline className='tshirtmob' scene="https://prod.spline.design/x7EwRLRyCPYo6Bhg/scene.splinecode" />
        </div>
        <div className='w-full md:w-1/2 z-20'>
          <div className='w-full md:w-1/2'>
           
            <TshirtForm />
          </div>
        </div>
      </div>

    </>
  )
}

export default Tshirt;
