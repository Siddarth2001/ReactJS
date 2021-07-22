import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {data} from "./books";
import Book from "./Book"
import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting);
  return (
  <section className="section">{data.map((book)=>{
    return (
      <Book key={book.id} {...book}></Book>    
    );
  })}</section>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'));