import React,{useContext} from 'react';
import {cartContext}  from './Cart';


const CardItems = ({id,src,title,price,desc}) => {
  const {removeItem} = useContext(cartContext);
  return (
    <>
      <div className="row row-cols-1 my-4 mx-4 row-cols-md-3 row-cols-lg-4 row-cols-sm-6 g-4">
    
     <div className="col">
        <div className="card " >
          <img width="100%" height="300" src={src} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Title {title}</h5>
            <p className="card-text">Price: {price}</p>
            <p className="card-text">Description: {desc}</p>
            <button className='btn btn-primary mx-2'   >Add</button>
            <button className='btn btn-primary mx-2' onClick={()=>{removeItem(id)}}  >Remove</button>
          </div>
        </div>
      </div>
       
    </div>


    
    </>
  );
}

export default CardItems;

