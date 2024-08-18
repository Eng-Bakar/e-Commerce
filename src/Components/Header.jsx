import { useState } from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"

function Header ({raadin}) {
    const [isOpen,setIsopen] = useState(false)
    const HandleOpenBTn = ()=> {
        setIsopen(true)
    }
    const HandleCloseBtn = () => {
        setIsopen(false)
    }
    const NumberOfItems = useSelector((state) => state.Sallad.items)   //{/*state and items are from cart file */}
    return <div>
        <div className="w-full sm:flex px-[20px] justify-between top-0 absolute  bg-orange-500">
            <h1 style={{display: isOpen == true ? "none" : ""}} className="text-white font-bold text-[40px] mt-[10px]  sm:mt-[5px] "> Tech<span className="text-black">Bookie</span> </h1>
            <i style={{display: isOpen == true ? "none" : ""}} onClick={HandleOpenBTn} class="fa-solid fa-bars-staggered flex  absolute sm:top-0 sm:right-0 top-2 right-4 text-[40px] text-white hover:text-black sm:hidden mt-[10px]"></i>
            <i style={{display: isOpen == true ? "block" : "none"}} onClick={HandleCloseBtn} class="fa-solid fa-x  flex  absolute sm:top-0 sm:right-0 top-2 right-4 text-[40px] text-white hover:text-black sm:hidden mt-[20px]"></i>
            <ul style={{display: isOpen == true ? "block" : "none"}} className="font-semibold text-[25px] sm:text-[20px] sm:flex gap-[20px] placeholder:text-white placeholder:text-[18px] placeholder:font-semibold pb-[30px] mt-[90px] sm:mt-[25px]">
                <li className="hover:text-white hover:font-bold"> Home </li>
                <li className="hover:text-white hover:font-bold"> Services </li>
                <li className="hover:text-white hover:font-bold"> Blogs </li>
                <li className="hover:text-white hover:font-bold"> About </li>
                <li className="hover:text-white hover:font-bold"> Contact </li>
            </ul>
            <div style={{display: isOpen == true ? "block" : "none"}} className="mr-[60px] absolute top-7  sm:mt-[20px]">
                <input onChange={raadin} className="w-[250px] rounded-[10px] bg-transparent text-white  px-[10px] h-[40px] outline-none border-[2px] border-white" type="text" placeholder="Search item" />
                <i className="fa-solid fa-magnifying-glass text-[20px] ml-[-25px] mt-[10px] absolute text-black hover:text-white"></i>
                <Link to="/Cart"> 
                    <i className="fa-solid fa-cart-plus text-[25px] ml-[4px] text-black hover:text-white"> <sub className="text-[14px] text-white hover:text-black"> {NumberOfItems.length} </sub></i>  {/* lenght waa inta mar oo aa soo galin rabto*/}
                </Link>

            </div>
        </div>
    </div>
}

export default Header