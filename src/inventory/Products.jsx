import React from 'react';
import styled from 'styled-components';

const Products = () => {
  return (
    <DIV>
      <div className="container">
        <div className='ribbon'>
          <p>Your product catalogue is currently empty</p>
          <button>Add product</button>
        </div>
      </div>
    </DIV>
  )
}

export default Products
const DIV = styled.div`
  .container{
        background-color: #F5F5FD;
        margin:10px 0;
        padding: 5rem;
        

        .ribbon{
          display:flex;
          justify-content: space-between;
          height: 100%;
            p{
              font-size: 20px;
          }
          button{
              color: white;
              background: #0C2340;
              border: none;
              font-size: 18px;
              padding: 10px 20px;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.3s ease;
          }
          button:hover{
              background: black;
          }
        }
    }
`
  ;