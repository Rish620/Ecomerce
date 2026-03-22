import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";
import { contactReducer } from "./reducers/contact";

const Store = configureStore({
    reducer: {
        user: userReducer,
        seller: sellerReducer,
        products: productReducer,
        events: eventReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        order: orderReducer,
        contact: contactReducer,
    },
});

export default Store;
