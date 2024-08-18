import { useDispatch } from "react-redux"
import { AddItemToSalada } from "../Redux/Reducer/cart"
import { CalculateTotalPrice } from "../Redux/Reducer/cart"
import {toast, Toaster} from "react-hot-toast"

function Product ({items}){
    const Dispatch = useDispatch()
    const HandleCart = () => {
        Dispatch(AddItemToSalada(items))
        Dispatch(CalculateTotalPrice())
        if (AddItemToSalada(items)){
            toast.success("Successful Added")
        }


    }
    return <div>
        <div className="border-4 border-gray-400 mt-[20px] border-solid px-[10px] w-[250px]">
            <img className=" h-[150px] sm:ml-8 ml-[30px] " src={items.image} alt="" />
            <h1> {items.title.substring(0,40 ) + ("...")}  </h1>
            <h1> {items.price} </h1>
            <button onClick={HandleCart} className="bg-black rounded-full text-white w-[20px] h-[20px]"> + </button>
        </div>
        <Toaster/>
    </div>
}
export default Product 