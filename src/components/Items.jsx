import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"

const Items = ()=>{
    const {products} = useContext(ShopContext);
products.map ((item)=>{{
    <Item key = {item.id}
    {...item}/>
}})
}
export default Items;