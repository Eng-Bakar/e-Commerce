import { useState } from "react"
import { useSelector } from "react-redux"
function PriceCart (){
    const price = useSelector((state) => state.Sallad.TotalPrice)
    const Number = useSelector((state) => state.Sallad.items)
    return <div>
        <div className="bg-white shadow-lg shadow-black w-[300px] p-[10px] right-10 top-10 fixed h-[200px]">
            <h1 className="font-bold text-[20px]"> Total items </h1>
            <h1 className="text-[20px] font-semibold"> {Number.length} </h1>
            <h1 className="font-bold text-[20px]"> Total Price </h1>
            <h1 className="font-bold"> ${price}</h1>
            <button  className="bg-sky-400 hover:bg-sky-900  w-[90%] ml-[10px] mt-[20px] h-[40px] text-white"> Pay Now</button>

        </div>
    </div>
}
export default PriceCart