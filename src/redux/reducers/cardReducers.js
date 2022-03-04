import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState={
    cart:[],
    products:[
        {name:'lenovo Laptop', id:1},
        {name:'Asus Laptop', id:2},
        {name:'Dell Laptop', id:3},
        {name:'Hp Laptop', id:4},
        {name:'Apple Laptop', id:5},
    ]
}
const cartReducers=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
                const newItem={
                    productId:action.id,
                    productName:action.name,
                    cardId:state.cart.length+1
                }
                const newCart=[...state.cart, newItem];
                // return{products:state.products, cart:newCart}
                return{...state, cart:newCart}
                
                case REMOVE_FROM_CART:
                    // console.log(action);
                    const cartId=action.cartId;
                    const remainingCart=state.cart.filter(item=> item.cartId!== cartId);
                    // return {products:state.products, cart:remainingCart}
                    return {...state, cart:remainingCart}
        default:
            return state;
    }

}

export default cartReducers;