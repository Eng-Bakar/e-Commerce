import Product from "./Product"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "./Header"
import  HashLoader  from "react-spinners/HashLoader"
function ProductList (){
    
    const [Products, setProducts] = useState([])
    const [Search, setSearch] = useState("")
    const [Loading, setLoading] = useState(false)


    const HandleSearch = (event) => {
        setSearch(event.target.value)
    }

    const HandleGetProduct = () => {
        setLoading(true)
        axios.get("https://fakestoreapi.in/api/products").then((response) => {
            setProducts ((response.data.products))
            setLoading(false)

        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        HandleGetProduct()
    },[])


    
    
    return <div className="">
        <Header raadin={HandleSearch} />
        {
            Loading == true ? <HashLoader className="ml-[570px] mt-[200px] " color="orange" size={60} loading={Loading} /> :
        
        <div className=" sm:grid sm:grid-cols-[300px_300px_300px] sm:gap-[30px] ml-[70px] mt-[100px] sm:ml-[150px] sm:mt-[20px]">

        {
             // items xogta si kumel gaar ah aa loogu shubaa asiga iyo event ga
            Products.filter((items) => {
                return Search.toLowerCase() == "" ? items // search input haduu eber yahay items soo celi 
                : items.title.toLowerCase().includes(Search.toLowerCase()) 
            }).map((data) => {
                return <Product items={data}  />
                
            })
        }
    </div>
    }
        </div>
}
export default ProductList