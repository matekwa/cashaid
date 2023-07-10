import React, { useState } from 'react';
import Retail from './Retail';
import Restaurant from './Restaurant';
import styled from 'styled-components';




const Products = () => {
  const [component, setComponent] = useState('');

  const renderComponent = () => {
    switch(component){
      case 'restaurant':
          return <Restaurant />;
      default:
          return <Retail />;
  }
  }
  return (
    <DIV>
      <div className="container">
        <div className='ribbon'>
          <h2>Choose Your Business Model</h2>
        </div>
      </div>
      <div className='ribbon'>
        <div className="buttons">
          <div>
            <button onClick={()=> setComponent('restaurant')}>Restaurant</button>
          </div>
          <div>
            <button onClick={()=> setComponent('retail')}>Retail Shop</button>
          </div>
          <div>
            <button onClick={()=> setComponent('pub')}>Pub</button>
          </div>
        </div>
        <button onClick={renderComponent}>Add now</button>
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
}
`
;

