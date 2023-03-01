import axios from "axios";
import { useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductCard = ({
  id,
  name,
  image,
  price,
  dampingRate,
  amount,
  getTutorials,
  tutorials,
}) => {
  const [count, setCount] = useState(amount);

  const deleteTutorial = async (id) => {
    const BASE_URL = "https://63fa3f63beec322c57f02622.mockapi.io/producks";
    try {
      await axios.delete(`${BASE_URL}/${id}/`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const updateAmount = async (id,count) => {
    // console.log(id);
    console.log(count);

    const BASE_URL = "https://63fa3f63beec322c57f02622.mockapi.io/producks";
    try {
      await axios.put(`${BASE_URL}/${id}/`, { amount: count });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div key={id} className="d-flex w-100 border mt-3 shadow">
      <div className="img m-3 w-50 text-center pt-5">
        <img src={image} alt="" style={{ width: "80%" }} />
      </div>
      <div className="w-50 pt-3">
        <div className="items">
          <h5 className="mt-2">{name}</h5>
          <p>
            <span className="text-warning fs-3">${price * dampingRate}</span>

            <span className="text-decoration-line-through fs-5">{price}</span>
          </p>
        </div>

        <div className="button border p-2 d-flex justify-content-center w-100">
          <button
            className="m-2"
            onClick={() => {
              setCount(Number(count) + 1);
              updateAmount(id,count+1)
            }}
          >
            {""} <AiOutlinePlus />
            {""}
          </button>
          <span className="m-2">{count}</span>
          <button
            className="m-2"
            onClick={() => {setCount(count > 1 ? count - 1 : (count = 0)); updateAmount(id,count-1)}}
          >
            <AiOutlineMinus />
          </button>
        </div>
        <div className="remove mt-4">
          <button
            onClick={() => deleteTutorial(id)}
            type="button"
            className="btn btn-danger w-100"
          >
            <AiFillDelete />
            Remove
          </button>
        </div>
        <div className="productTotal">
          <p>
            Product Total:$<span>{price * dampingRate * count}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
