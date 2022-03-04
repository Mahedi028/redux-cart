import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../product/Product';

const Shop = (props) => {

    console.log(props);

    // const products=[
       
    // ]

    const {products, addToCart}=props; //destructuring 

    return (
        <div>
            <h2>this is shop</h2>
            {/* {
                
                props.products.map(pd=><Product product={pd} key={pd.id}></Product>)
            } */}
            {
                products.map(pd=><Product 
                    product={pd} 
                    key={pd.id}
                    addToCart={addToCart}
                    >
                </Product>)
            }
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        products:state.products
    }
}

const mapDispatchToProps={
    addToCart:addToCart
}

// const connetToStore=connect(mapStateToProps, mapDispatchToProps);

// connetToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);