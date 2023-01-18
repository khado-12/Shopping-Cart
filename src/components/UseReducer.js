import React,{useReducer} from 'react';

const UseReducer = () => {
    const initialState=0;
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className='container'>
      <button className='bt btn-outline-green'>Inc</button>
      <button className='bt btn-outline-green'>Dec</button>
    </div>
  );
}

export default UseReducer;
