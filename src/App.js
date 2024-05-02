import './App.css';
import { ImSpinner11 } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";

export default function App(){
  return(
    <div>
      <button>
      <FaRegHeart />Like
      </button>
      <button>
      <ImSpinner11 />Like
      </button>
    </div>
  )
}