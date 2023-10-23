function PhotoGallery() {
  const imagearray=[
    {
      img:"src/assets/gallery/one.jpg"
    },
    {
      img:"src/assets/gallery/two.jpg"
    },
    {
      img:"src/assets/gallery/three.jpg"
    },
    {
      img:"src/assets/gallery/four.jpg"
    },
    {
      img:"src/assets/gallery/five.jpg"
    },
    {
      img:"src/assets/gallery/six.jpg"
    },
    {
      img:"src/assets/gallery/seven.jpg"
    },
    {
      img:"src/assets/gallery/eight.jpg"
    },
    {
      img:"src/assets/gallery/nine.jpg"
    },
    {
      img:"src/assets/gallery/ten.jpg"
    },
    {
      img:"src/assets/gallery/eleven.jpg"
    },
    {
      img:"src/assets/gallery/twelve.jpg"
    },
    {
      img:"src/assets/gallery/therteen.jpg"
    },
    {
      img:"src/assets/gallery/fourteen.jpg"
    },
    {
      img:"src/assets/gallery/fiveteen.jpg"
    },
    {
      img:"src/assets/gallery/sixteen.jpg"
    },

  ]
  return (
    imagearray.map((array, i) => (
      <div key={i} className="h-auto imagebig w-80">
        <img src={array.img} alt="" />
      </div>
    ))
  )
}

export default PhotoGallery