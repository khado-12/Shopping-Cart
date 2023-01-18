import React,{useContext} from 'react';
import Header from './Header';
import Footer from './Footer';
import CardItems from './CardItems';
import {cartContext}  from './Cart';
const Context = () => {
    const {item} = useContext(cartContext)
  return (
    <>
    <Header/>
      {
        item?.map((itm)=>{
        return( 
       <>
        <CardItems key={itm.id} {...itm} />
      </>
         )
      })}
      <Footer/>
      
    </>
  );
}

export default Context;
