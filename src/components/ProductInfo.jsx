import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartSlice from '../redux/cartSlice'

const ProductInfo = () => {
  const count=useSelector(state=>state.count)
  const price=useSelector(state=>state.price)
  
  const dispatch=useDispatch()

  const handleMinus=()=>{
    if(count>1){
      dispatch(cartSlice.actions.decrementCount())
    }
  }
  const handlePlus=()=>{
    dispatch(cartSlice.actions.incrementCount())
  }
  const handleAdd=()=>{
    dispatch(cartSlice.actions.addToCart())
  }

  return (
    <div className='information'>
      <div className="about">
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      </div>
      <div className="prices">
        <div className="noble">
            <p>${price}.00</p>
            <span>50%</span>
        </div>
        <p className="oldprice">${price*2}.00</p>
      </div>
      <div className="adding">
        <div className="count">
            <button onClick={handleMinus}>
                <img src="../src/assets/icon-minus.svg" alt="Decrement" />
            </button>
            <p>{count}</p>
            <button onClick={handlePlus}>
                <img src="../src/assets/icon-plus.svg" alt="Increment" />
            </button>
        </div>
        <button onClick={handleAdd} className='btn-add'>
            <img src="../src/assets/icon-basket-white.svg" alt="Basket" />
            <p>Add to cart</p>
        </button>
      </div>
    </div>
  )
}

export default ProductInfo
