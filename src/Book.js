import React from 'react'

const Book = ({img, Title, Author})=>{
// ------------------Events----------
// we need attributes, eventhandlers
// onclinck onmouseover
  const clickhandler = (e) =>{
    console.log(e);
    console.log(e.target);
    alert('Hello Guys!'); /*outside function is used for the event*/
  };
  const HeavyBuy = (Author)=>{
    console.log(Author);
  }
  return (
    <article className="article" onMouseOver={()=>{
      console.log(Title);
    }}>
      <img src = {img} alt=""/>
      <h1 onClick={()=> console.log(Title)}>{Title}</h1> {/*inline function used for events*/}
      <h4>{Author}</h4>
      <button type="button" onClick={clickhandler}>Buy Now</button>
      <button type="button" onClick={()=>HeavyBuy(Author)}>Heavy Buy</button>
    </article>
  );
};

export default Book
