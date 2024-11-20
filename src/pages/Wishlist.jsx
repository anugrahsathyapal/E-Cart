import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addtoCart } from '../redux/slices/cartSlice'


const Wishlist = () => {
    const userCart = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    const userWishlist = useSelector(state=>state.wishlistReducer)

    const handleCart = (product) => {
        dispatch(removeItem(product.id))
        dispatch(addtoCart(product))
        const existingProduct = userCart?.find(item=>item?.id==product.id)
        if(existingProduct){
          alert("Product quantity is incrementing in your cart!!!")
        }else{
          alert("Product added to your cart")
        }
      }



  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
    {
    userWishlist?.length>0 ?
    <>
    <h1 className='text-4xl font-bold text-red-600 '>My Wishlist</h1>
    <div className='grid grid-cols-4 gap-4'>
    {
        userWishlist?.map(product=>(
            <div key={product?.id} className=' rounded border p-2 shadow'>
            <img  style={{width:'100%',height:'300px'}}  src={product?.thumbnail} alt="" />
            <div className='text-center '>
                <h3 className='text-xl font-bold '>{product?.title}</h3>
                <div className='flex  justify-evenly mt-3'>
                    <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i> </button>
                    <button onClick={()=>handleCart(product)} className='text-xl'><i className='fa-solid fa-cart-plus text-green-700'></i> </button>
    
                </div>
            </div>
    
        </div>
        ))
    }
   
 </div>
 </>
   :
    <div className='flex flex-col justify-center items-center'>
        <img className='w-100 h-1/2' src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
        <h1 className='text-3xl text-red-600'>Your Wishlist is Empty !!!</h1>


    </div>

   }
       

    </div>
    </>
  )
}

export default Wishlist





  