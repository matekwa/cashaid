import React from 'react';
import styled from 'styled-components';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';


const Products = () => {
  const [showAddProduct, setShowAddProduct] = React.useState(false);

  const renderComponent = () => {
    setShowAddProduct(true);
  }
  const handleClose = () => {
    setShowAddProduct(false);
  }

    return (
      <DIV>
        <div className="container">
          <div className='ribbon'>
            <p>Your product catalogue is currently empty</p>
            <button onClick={renderComponent}>Add product</button>
          </div>
        </div>
        {showAddProduct && (
          <div className='addProduct'>
            <h2>Add new product</h2>
            <form action="">
              <div className="form">
                <div>
                  <div className="input-element">
                    <label htmlFor="ref">Ref.</label>
                    <input type="text" value='P00929' placeholder='Product label' disabled />
                  </div>
                  <div className="input-element">
                    <label htmlFor="product label">Product label</label>
                    <input type="text" placeholder='Product label' autoFocus />
                  </div>
                  <div className="input-element">
                    <label htmlFor="retail price">Product nature</label>
                    <select name="product nature" id="">
                      <option value="manufactured">Manufactured</option>
                      <option value="raw material">Raw material</option>
                    </select>
                  </div>
                  <div className="input-element">
                    <label htmlFor="serial no.">Serial No.</label>
                    <input type="text" placeholder='Serial No.' />
                  </div>
                  <div className="input-element">
                    <label htmlFor="barcode type">Bar code type</label>
                    <select name="barcode type" id="">
                      <option value="value 1">IEE</option>
                      <option value="value 3">STRD</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="input-element">
                    <label htmlFor="barcode value">Barcode value</label>
                    <input type="text" value='BR393939D' disabled />
                  </div>
                  <div className="input-element">
                    <label htmlFor="description">Description</label>
                    <TextBoxComponent multiline={true} placeholder='Enter your address' value='' />
                  </div>
                  <div className="input-element">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="">
                      <option value="Chrome">Chrome</option>
                      <option value="vodka 2">Vodka</option>
                      <option value="Breakfast">Breakfast</option>
                    </select>
                  </div>
                  <div className="input-element">
                    <label htmlFor="wholesale price">Wholesale price</label>
                    <input type="number" placeholder='Wholesale price' />
                  </div>
                  <div className="input-element">
                    <label htmlFor="retail price">Retail price</label>
                    <input type="number" placeholder='Retail price' />
                  </div>
                  <div className='input-element'>
                    <label htmlFor="Product Image">Product Image</label>
                    <input type="file" />
                  </div>
                </div>
                <div>
                  <div className="input-element">
                    <label htmlFor="supplier">Supplier</label>
                    <select name="supplier" id="">
                      <option value="supplier 1">Supplier 1</option>
                      <option value="supplier 2">Supplier 2</option>
                      <option value="supplier 3">Supplier 3</option>
                    </select>
                  </div>
                  <div className="input-element">
                    <label htmlFor="Physical Stock">Physical stock</label>
                    <input type="number" placeholder='Physical stock ' />
                  </div>
                  <div className="input-element">
                    <label htmlFor="quantity">Stock limit for alert</label>
                    <input type="number" placeholder='Stock limit for alert' />
                    <select name="tax" id="">
                      <option value="inclusive">Incl VAT</option>
                      <option value="exclusive">Excl VAT</option>
                    </select>
                  </div>
                  <div className="input-element">
                    <label htmlFor="retail price">Tax</label>
                    <div>
                      <input type="number" placeholder='Retail price' />
                      <span>%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button onClick={handleClose}>Cancel</button>
                <button >Save</button>
              </div>
            </form>
          </div>
        )}
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

.addProduct{
    background-color: #F5F5FD;
    margin:10px 0;
    padding: 5rem;

      h2{
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
      }
      form{

          .form{
          display: flex;
          justify-content: space-between;
          }

          .input-element{
            display: flex;
            flex-direction: column;

              label{
              font-weight: bold;
              padding: .2rem 0;
              }
              
              input, select{
              outline: none;
              padding: 10px;
              font-size: 15px;
              font-familly: 'serif';
              color: black;
              border: none;
              background: #fff;
              border: 1px solid #F5F5FD;
              border-radius: 5px;
              width: 300px;
              margin: 15px 0;
            }
            input:hover{
                border: 1px solid gray;
            }
            input:focus{
                border 1 solid #0C2340;
            }
          }  
        .buttons{
            display: flex;
            justify-content: space-between;
            margin: 5px 0;

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
}
`
    ;

