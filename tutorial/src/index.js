// React and ReactDom needed to set up the compoment
import React from "react";
import ReactDom from "react-dom";

/* 
  - this a a compenent 
  - in order of React to know it's a component, 
      the function's name needs to be capitalized

  - stateless functional component
  - always return JSX

  - JSX Rules
    - return a single element
    - div / section / article or Fragment
    - use CamelCase for html
    - className instead of class
    - close every element 
    - formatting
*/

// Nested Components, React Tools

//CSS 
import './index.css'; //-> this means the file is in the same folder -> relative path
import {books} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
 }



// inline CSS is stronger than the CSS in index.css file and will override the properties -> JSX CSS, need curly braces tp access JSV 
// const Author = () => <h4 style={{color:'#617d98', fontSize: '0.7frem', marginTop:'0.25rem'}}>Amelia Hepwork</h4>

/*
  - pass in what we want to render
    and where we want to render it
*/
ReactDom.render(<BookList />, document.getElementById("root"));