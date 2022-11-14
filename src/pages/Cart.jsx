import React from 'react'
import { createContext} from 'react'
import { CartProduct } from '../data';
import ContextCart from '../components/ContextCart'
import { useReducer } from 'react';
import { Reducer } from '../components/Reducer';
import { useEffect } from 'react';
export const CartContext = createContext();

const initialState = {
    item : CartProduct,
    totalAmount : 0,
    totalItem : 0,
};


const Cart = () => {
    //const [item,setItem] = useState(CartProduct);
    const [state,dispatch] = useReducer(Reducer,initialState);

    

    // to delete an individual Element from Cart
    const removeItem = (id) =>{
      return dispatch ({
          type: "REMOVE_ITEM",
          payload : id,

      })
    };

    // increment of item
    const increment = (id) =>{
      return dispatch({
        type:"INCREMENT",
        payload:id,
      })
    }
    
    const decrement = (id) =>{
      return dispatch({
        type:"DECREMENT",
        payload:id,
      })
    }

    //We will use the UseEffect to update the data

    useEffect(()=>{
      dispatch ({type:"GET_TOTAL"});
      //console.log("Awesome")
      
    }, [state.item]);

  return (
    <CartContext.Provider value = {{...state,removeItem,increment,decrement}}>
    <ContextCart/> 
    </CartContext.Provider>
  )
}

export default Cart
