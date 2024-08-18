import {Route, Routes} from "react-router-dom"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"

function App (){
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>

}
export default App  