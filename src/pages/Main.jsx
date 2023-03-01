import axios from "axios"
import { useEffect, useState } from "react"
import AddProduct from "../components/AddProduct"
import Button from "../components/Button"
import Button2 from "../components/Button2"
import CardTotal from "../components/CardTotal"
import ProductCard from "../components/ProductCard"


const Main = () => {
  const [button, setButton] = useState(false)
  const [tutorials, setTutorials] = useState([])
  const BASE_URL ="https://63fa3f63beec322c57f02622.mockapi.io/producks"

  const getTutorials = async () => {
    try {
      const { data } = await axios(BASE_URL)
      setTutorials(data)
     
    } catch (error) {
      console.log(error)
    }
  }
  
console.log(getTutorials);
  useEffect(() => {
    getTutorials()
  }, [])

  return (
    <div className="container-fluid ">
      <span onClick={()=>setButton(!button)}>
        {button ? <Button2/> : <Button/>}
      </span>
      <div className="d-flex justify-content-center ">
        {
          button ? (<AddProduct tutorials={tutorials} getTutorials={getTutorials}  className="w-50 m-3"/>) : null
        }
        <div className="w-50 m-3">
          <div>
              {tutorials?.map((item)=>{
                return (<ProductCard getTutorials={getTutorials} key={item.id} {...item}/>)
              })}
          </div>
          <CardTotal data={tutorials}/>
        </div>
      </div>
      
    </div>
  )
}

export default Main