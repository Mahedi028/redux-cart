import React from 'react';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';
const Cart = (props) => {
    // console.log(props);
    const{ cart, removeFromCart}=props;
    // console.log(cart);
    return (
        <div style={{
            border:'1px solid black',
            borderRadius:'5px'
            }}>
            <h4>This is cart</h4>
            <ul>
                {
                    cart.map(pd=><li 
                    style={{
                        listStyle:'none',
                    }}
                    key={pd.id}>
                    <a style={{
                        textDecoration:'none',
                        color:'red',
                        textTransform:'capitalize',
                        cursor:'pointer',
                    }}
                    href="#">{pd.productName}</a>
                     <button 
                    onClick={()=>removeFromCart(pd.cartId)}
                    >X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        cart:state.cart
    }
}


const mapDispatchToProps={
    removeFromCart:removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);