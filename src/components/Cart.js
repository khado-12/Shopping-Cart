import React,{createContext,useReducer} from 'react';
import { Strategy } from 'workbox-strategies';

import Context from './Context';
// import {Products }from './Products'

export const cartContext= createContext();
import {reducer } from './reducer';
const Cart = () => {
    const products= [
        {
          id:1,
          src:"https://plus.unsplash.com/premium_photo-1668698356795-904945de5286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
         title:"title1",
         price:234,
         desc: 'A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically.'
        },
        {
          id:2,
          src:"https://plus.unsplash.com/premium_photo-1668698356795-904945de5286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          ,
         title:"title2",
         price:345,
         desc: 'A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically.'
        },{
          id:3,
          src:"https://plus.unsplash.com/premium_photo-1668698356795-904945de5286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          ,
          title:"title3",
          price:234,
          desc: ' A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically.'
        },{
          id:4,
          src:"https://plus.unsplash.com/premium_photo-1668698356795-904945de5286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          ,
          title:"title4",
          price:234,
          desc: 'A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically.'
        },{
          id:5,
          src:"https://plus.unsplash.com/premium_photo-1668698356795-904945de5286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          ,
          title:"title5",
          price:234,
          desc: 'A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically.'
         },{
          id:5,
          src:"https://plus.unsplash.com/premium_photo-1668698356795-904945de5286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          ,
          title:"title6",
          price:345,
          desc: 'A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically.'
         }
      ];
      const initialState={
        item:products,
        totalPrice:0,
        quantity:0
      }
    // const [item, setItem] = useState(Products);
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <cartContext.Provider value={...state}>
      <Context/>
      </cartContext.Provider>
    </>
  );
}

export default Cart;
