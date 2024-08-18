import { useSelector, useDispatch } from "react-redux"
import Product from "../Components/Product"
import PriceCart from "./PriceCart"
import { CalculateTotalPrice, RemoveItemFromCart } from "../Redux/Reducer/cart"

function Cart (){
    const items = useSelector( (state) => state.Sallad.items)
    const dispatch = useDispatch()
    const HandleRemoveItemsFromCart = (id)=> {
        dispatch(RemoveItemFromCart(id))
        dispatch(CalculateTotalPrice())
    }

    return <div className="mt-[300px]">
        {
            items.length === 0 ? <p className="text-orange-500 text-[40px] sm:text-[100px] font-bold text-center mt-[150px]"> The  Cart is Empty </p> :
       
        <div>
            {
                items.map((data) => {
                    return <div className="sm:w-[470px] w-[330px] ml-[20px] sm:ml-[300px] px-[10px] mt-[30px] sm:mt-[10px] sm:flex border-4 border-gray-200 h-[330px] sm:h-[170px]"> 
                        <img className="w-[150px] ml-[70px] sm:ml-0 h-[160px] " src={data.image} alt="" />
                        <div className="mt-[20px] ml-[20px] ">
                            <h1 className="font-bold  text-[16px]"> {data.title.substring(0,100) + ("...")} </h1>
                            <div className="sm:flex justify-between mt-[10px] ">
                                <h1 className="font-semibold text-[20px] sm:text-[18px]"> ${data.price} </h1>
                            </div>
                        </div>
                                <i onClick={() => HandleRemoveItemsFromCart(data)} class="fa-solid text-black-400 absolute right-10 hover:text-sky-700 fa-trash text-[23px] sm:mt-[125px]  "></i>
                    </div>
                } )
            }
        <PriceCart />
        </div>
    }
    </div>
}
export default Cart

