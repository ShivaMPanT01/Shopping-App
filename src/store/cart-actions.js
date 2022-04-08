import { uiAction } from "./ui-slice";
import axios from "axios";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
   return async (dispatch) => {
      const fetchData = async () => {
         const response = await axios.get(
            "https://advance-redux-54b0d-default-rtdb.firebaseio.com/cart.json"
         );
         const data = response.data;
         return data;
      };

      try {
         const cartData = await fetchData();
         dispatch(
            cartActions.replaceCart({
               items: cartData.items || [],
               totalQuantity: cartData.totalQuantity,
            })
         );
      } catch (err) {
         dispatch(
            uiAction.showNotification({
               status: "error",
               title: "Error!",
               message: "Fetching cart Data Failed!",
            })
         );
      }
   };
};

export const sendCartData = (cart) => {
   return async (dispatch) => {
      dispatch(
         uiAction.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!",
         })
      );

      const sendRequest = async () => {
         const response = await axios.put(
            "https://advance-redux-54b0d-default-rtdb.firebaseio.com/cart.json",
            cart
         );
         console.log(response);
      };

      try {
         await sendRequest();

         dispatch(
            uiAction.showNotification({
               status: "succes",
               title: "Success!",
               message: "Sent Cart Data Successfully",
            })
         );
      } catch (err) {
         dispatch(
            uiAction.showNotification({
               status: "error",
               title: "Error!",
               message: "Sending cart Data Failed!",
            })
         );
      }
   };
};
