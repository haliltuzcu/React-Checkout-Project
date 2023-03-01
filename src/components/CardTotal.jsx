
const CardTotal = ({data}) => {
  console.log(data);
  const {price,amount,dampingRate} = data
  console.log(price);
  let tax = 0.18
  let subTotal = 0
  data.map((x)=>{
    subTotal += (x.price * x.amount * x.dampingRate)
  })
  let taxtotal = subTotal * tax
  let shipping = (subTotal > 300) ? 0 : 25
  let total = (Number(subTotal)) + (Number(taxtotal))
  // console.log(total);
  return (
    <div className='container w-100 mt-5'>
        <p className='border-bottom p-2 d-flex justify-content-between'><span style={{fontWeight:"700"}}>Subtotal</span><span>${Number(subTotal).toFixed(2)}</span></p>
        <p className='border-bottom p-2 d-flex justify-content-between' ><span style={{fontWeight:"700"}}>Tax(18%)</span><span>${Number(taxtotal).toFixed(2)}</span></p>
        <p className='border-bottom p-2 d-flex justify-content-between'><span style={{fontWeight:"700"}}>Shipping</span><span>${shipping}</span></p>
        <p className='border-bottom p-2 d-flex justify-content-between'><span style={{fontWeight:"700"}}>Total</span><span>${(total).toFixed(2)}</span></p>
    </div>
  )
}

export default CardTotal;