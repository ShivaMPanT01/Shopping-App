import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
   const cart = useSelector((state) => state.cart);
   const showCart = useSelector((state) => state.ui.cartIsVisible);
   const notification = useSelector((state) => state.ui.notification);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchCartData());
   }, [dispatch]);

   useEffect(() => {
      if (isInitial) {
         isInitial = false;

         return;
      }

      dispatch(sendCartData(cart));
   }, [cart, dispatch]);

   return (
      <>
         {notification && (
            <Notification
               title={notification.title}
               status={notification.status}
               message={notification.message}
            />
         )}
         <Layout>
            {showCart && <Cart />}
            <Products />
         </Layout>
      </>
   );
}

export default App;