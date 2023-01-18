import React from 'react';

const Banner = () => {
    const datas= [
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
         }]
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img width="100%" height="300"  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVjb21lcmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=w=100&q=60" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img  width="100%" height="300" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbWVyY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=61" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img width="100%" height="300" src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Banner;
