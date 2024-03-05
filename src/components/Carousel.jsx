import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../redux/cartSlice';


const images=[
    "./src/assets/image-product-1.jpg",
    "./src/assets/image-product-2.jpg",
    "./src/assets/image-product-3.jpg",
    "./src/assets/image-product-4.jpg",
]

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [openmodal, setOpenmodal]=useState(false)
  const imageIndex=useSelector(state=>state.imageIndex)
  const dispatch=useDispatch()

  const nextSlide = () => {
    setImgIndex((prevIndex)=>(prevIndex===images.length-1?0:prevIndex+1));
 };

  const prevSlide = () => {
    setImgIndex((prevIndex)=>(prevIndex===0?images.length-1:prevIndex-1));
  };
  const handleModal=()=>{
    setOpenmodal(!openmodal)
  }
  useEffect(()=>{
    dispatch(cartSlice.actions.changeImgIndex(imgIndex))
    setImgIndex(imageIndex)
  },imgIndex)
  return (
    <>
    <div className='carousel'>
      <img className='btn-slide' onClick={prevSlide} src="./src/assets/arrow-left.svg" alt="Prev" />
      <img onClick={handleModal} className='slide' src={images[imgIndex]}/>
      <img id='next' className='btn-slide' onClick={nextSlide} src="./src/assets/arrow-right.svg" alt="Next" />
      <div className="scroll ">
        {images.map(src=>(
          <img key={Math.random()} className={2==2?"selected-img":""} onClick={()=>{setImgIndex(parseInt(src.slice(27,28))-1)}} src={src} alt={src.slice(14,29)} />
        ))}
      </div>
    </div>
    <div className={`modalcarousel ${openmodal?"":"hidden"}`}>
      <img onClick={handleModal} className='modal-close' src="./src/assets/close-modal.svg" alt="Close" />
      <div>
        <img className='modal-btn-slide' onClick={prevSlide} src="./src/assets/arrow-left.svg" alt="Prev" />
        <img className='modal-slide' src={images[imgIndex]}/>
        <img id='next' className='modal-btn-slide' onClick={nextSlide} src="./src/assets/arrow-right.svg" alt="Next" />
      </div>
    </div>
    </>
  );
};

export default Carousel;
