import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*
function Greeting(){
  return (
    <div className=''>
      <article> 
        <h1>hello</h1> <Person/>
        <ul>
          <li>
            <a href='#'>hello world</a>
          </li>
          <Message/>
          <img src='' alt=''/>
        </ul>
      </article>
    </div>
  )
}

const Person = () => <h2>John doe</h2>
const Message = () => <p>This is my message</p>


const Greeting = () => {
  return React.createElement(
    'div', 
    {}, 
    React.createElement('h1', {}, 'hello world')
    )
}


const Images = () => {
   return <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" alt="Girl in a jacket" width="auto" /> 
}
const Title = () => <h1>Book Title</h1>
const Author = () => <h4>Anonymous</h4>
*/


function Booklist() {
  return <section className='book-list'>
   </section>
}
const books = [
  {
  img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg',
  title: 'Title',
  author: 'Amelia Hepworth'
  }, 
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91wRcPETM0L._AC_UL200_SR200,200_.jpg',
    title: 'Our class is a family',
    author: 'Shannon Olsen'
  }
]
const author = 'Amelia'
const title = 'Book titlee'
const img = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'

const Book = (props) => {
  const {img, title, author, children} = props
  console.log(props);
  return <div className="book">
    <img src={img} alt="Girl in a jacket" width="auto" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </div>
}


ReactDOM.render(<Booklist/>, document.getElementById('root'))

