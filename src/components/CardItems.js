import React from 'react';

const cardItems = (props) => {
  return (
    <>
      <div className="row row-cols-1 my-4 mx-4 row-cols-md-3 row-cols-lg-4 row-cols-sm-6 g-4">
    
     <div className="col">
        <div className="card " >
          <img width="100%" height="300" src={props.src} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Title {props.title}</h5>
            <p className="card-text">Price: {props.price}</p>
            <p className="card-text">Description: {props.desc}</p>
            <button className='btn btn-primary'   >Add to Cart</button>
          </div>
        </div>
      </div>
       
    </div>


    
    </>
  );
}

export default cardItems;

