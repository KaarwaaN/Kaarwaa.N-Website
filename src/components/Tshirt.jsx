import Spline from '@splinetool/react-spline';
const Tshirt = () => {
  return (
    <>
    <h1 className='text-5xl translate-y-24 font-semibold text-center'>Get Your Karwaa.N Tshirt</h1>
    <div className='flex w-full gap-32 justify-center flex-row items-center'>
      <div className=' h-full'>
      <Spline className='' scene="https://prod.spline.design/x7EwRLRyCPYo6Bhg/scene.splinecode" />
    </div>
    <div className='z-20'>
        <div className='w-1/2 h-full'>
        <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Tshirt
