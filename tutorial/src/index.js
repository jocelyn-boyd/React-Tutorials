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
import './index.css' //-> this means the file is in the same folder -> relative path

// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen and Sandie Sonke'
};

function BookList() {
  return (
  <section className='booklist'>
    <Book
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
      />
    <Book
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}
      />
  </section>
  );
 }

 // Book is a component and a function
const Book = (props) => {
  return ( <article className='book'>
    <img src={props.img} alt=""/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>    
  </article>
  );
};

// inline CSS is stronger than the CSS in index.css file and will override the properties -> JSX CSS, need curly braces tp access JSV 
// const Author = () => <h4 style={{color:'#617d98', fontSize: '0.7frem', marginTop:'0.25rem'}}>Amelia Hepwork</h4>

/*
  - pass in what we want to render
    and where we want to render it
*/
ReactDom.render(<BookList />, document.getElementById("root"));