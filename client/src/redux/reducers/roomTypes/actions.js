import axios from "axios";
import { 
  GET_ONE_ROOM_TYPE, 
  GET_ALL_ROOM_TYPES 
} from "./const";


export const fetchAllProductsNames = function () {
  return async function (dispatch) {
    try {
      const res = await axios.get("/products/allnames");
      dispatch(actionCreator(GET_ALL_NAMES, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};