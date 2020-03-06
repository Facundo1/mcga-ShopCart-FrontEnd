import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice()
    let productAlreadyInCart = false;
    cartItems.forEach(cp => {
        if (cp._id === product._id) {
            cp.count += 1;
            productAlreadyInCart = true;
        }
    })