import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const [showAddProduct, setShowAddProduct] = React.useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bus_id = searchParams.get('bus_id');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [productLabel, setProductLabel] = useState('');
  const [productNature, setProductNature] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [outlet, setOutlet] = useState('');
  const [barcodeType, setBarcodeType] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [wholesalePrice, setWholesalePrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [productPicture, setProductPicture] = useState('');
  const [supplier, setSupplier] = useState('');
  const [physicalStock, setPhysicalStock] = useState('');
  const [stockLimit, setStockLimit] = useState('');
  const [VAT, setVAT] = useState(false);
  const [tax, setTax] = useState('');
  const [allSuppliers, setAllSuppliers] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allOutlets, setAllOutlets] = useState([]);
  const natureOfProduct = ["Manufactured", "Raw Material"];
  const typesOfBarcode = ["IEE", "STRD"];
  const vat = ["Incl VAT", "Excl VAT"];

  const renderComponent = () => {
    setShowAddProduct(true);
  }
  const handleClose = () => {
    setShowAddProduct(false);
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    //Validations
    const validationErrors = {};
    if (!productLabel) {
      validationErrors.productLabel = 'Product label is required';
    }
    if (!productNature) {
      validationErrors.productNature = 'Product nature is required';
    }
    if (!serialNumber) {
      validationErrors.serialNumber = 'Serial number is required';
    }
    if (!barcodeType) {
      validationErrors.barcodeType = 'Please choose a bar code type';
    }
    if (!description) {
      validationErrors.outlet = 'Product description is required';
    }
    if (!category) {
      validationErrors.category = 'Product category is required';
    }
    if (!outlet) {
      validationErrors.outlet = 'Please choose an outlet';
    }
    if (!wholesalePrice) {
      validationErrors.wholesalePrice = "Enter this product's wholesale price";
    }
    if (!retailPrice) {
      validationErrors.retailPrice = 'Enter retail price';
    }
    if (!supplier) {
      validationErrors.supplier = 'Choose a supplier';
    }
    if (!physicalStock) {
      validationErrors.physicalStock = 'Enter physical stock';
    }
    if (!stockLimit) {
      validationErrors.stockLimit = 'Enter stock limit';
    }
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data to the server
      const productData = {
        productLabel,
        productNature,
        serialNumber,
        barcodeType,
        description,
        category,
        wholesalePrice,
        retailPrice,
        supplier,
        physicalStock,
        stockLimit,
        outlet,
        ownerID: bus_id
      }
      try {
        await axios.put(`${baseURL}/addProduct`, productData)
          .then((response) => {
            if (response.data.status === "ok") {
              console.log("success");
              setTimeout(() => {
                setLoading(false);
              }, 2000);

            } else {
              console.log(response);
              setLoading(false);
            }
          });
        setErrors({});
      }
      catch (e) {
        if (e.code === "ERR_NETWORK") {
          console.log('It seems you are offline.');
        }
        setLoading(false);
      }
    } else {
      // Form is invalid, update errors state
      setErrors(validationErrors);
      setLoading(false);
    }
  }


  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        await axios.post(`${baseURL}/fetchSuppliers`, { ownerID: bus_id }).then((response) => { setAllSuppliers(response.data.data.suppliers) }).catch((error) => { console.log(error) });
      } catch (error) {
        console.log('Errrrror fetching suppliers', error);
      }
    };
    const fetchCategories = async () => {
      try {
        await axios.post(`${baseURL}/fetchCategories`, { ownerID: bus_id }).then((response) => { setAllCategories(response.data.data.categories) }).catch((error) => { console.log(error) });
      } catch (error) {
        console.log('Errrrror fetching categories', error);
      }
    };
    const fetchOutlets = async () => {
      try {
        await axios.post(`${baseURL}/fetchOutlets`, { ownerID: bus_id }).then((response) => { setAllOutlets(response.data.data.outlets) }).catch((error) => { console.log(error) });
      } catch (error) {
        console.log('Errrrror fetching outlets', error);
      }
    };
    if (allSuppliers && allCategories && allOutlets) {
      fetchSuppliers();
      fetchCategories();
      fetchOutlets();
    }
  }, []);

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
          <form onSubmit={handleAddProduct}>
            <div className="form">
              <div>
                <div className="input-element">
                  <label htmlFor="ref">Ref.</label>
                  <input type="text" value='P00929' placeholder='Product label' disabled />
                </div>
                <div className="input-element">
                  <label htmlFor="product label">Product label</label>
                  <input type="text" placeholder='Product label' autoFocus value={productLabel} onChange={(e) => setProductLabel(e.target.value)} />
                  {errors.productLabel && <span className="error">{errors.productLabel}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="retail price">Product nature</label>
                  <select name="product nature" id="">
                    {natureOfProduct.map((item) => {
                      <option value={productNature} onSelect={() => setProductNature(e.target.value)}>{item}</option>
                    })}
                  </select>
                  {errors.productNature && <span className="error">{errors.productNature}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="serial no.">Serial No.</label>
                  <input type="text" placeholder='Serial No.' value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
                  {errors.serialNumber && <span className="error">{errors.serialNumber}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="barcode type">Bar code type</label>
                  <select name="barcode">
                    {typesOfBarcode.map((item) => {
                      <option value={barcodeType} onSelect={() => setBarcodeType(e.target.value)}>{item}</option>
                    })}
                  </select>
                  {errors.barcodeType && <span className="error">{errors.barcodeType}</span>}
                </div>
              </div>
              <div>
                <div className="input-element">
                  <label htmlFor="barcode value">Barcode value</label>
                  <input type="text" value='BR393939D' disabled />
                </div>
                <div className="input-element">
                  <label htmlFor="description">Description</label>
                  <TextBoxComponent multiline={true} placeholder='Enter your address' value={description} onChange={(e) => setDescription(e.target.value)} />
                  {errors.description && <span className="error">{errors.description}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="category">Category</label>
                  <select name="category" id="">
                    {allCategories.map((item) => {
                      <option value={category} onSelect={() => setCategory(e.target.value)}>{item}</option>
                    })}
                  </select>
                  {errors.category && <span className="error">{errors.category}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="wholesale price">Wholesale price</label>
                  <input type="number" placeholder='Wholesale price' value={wholesalePrice} onChange={(e) => setWholesalePrice(e.target.value)} />
                  {errors.wholesalePrice && <span className="error">{errors.wholesalePrice}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="retail price">Retail price</label>
                  <input type="number" placeholder='Retail price' value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} />
                  <select>
                    {vat.map((item) => {
                      <option value={VAT} onSelect={() => setVAT(e.target.value)}>{item}</option>
                    })}
                  </select>
                  {errors.retailPrice && <span className="error">{errors.retailPrice}</span>}
                </div>
                {VAT && (<div className="input-element">
                  <label htmlFor="retail price">Tax</label>
                  <div>
                    <input type="number" placeholder='Retail price' value={tax} onChange={(e) => setTax(e.target.value)} />
                    <span>%</span>
                  </div>
                </div>)}
                <div className='input-element'>
                  <label htmlFor="Product Image">Product Image</label>
                  <input type="file" />
                </div>
                <div className="input-element">
                  <label htmlFor="Outlet">Outlet</label>
                  <select>
                    {allOutlets.map((item) => {
                      <option value={outlet} onSelect={() => setOutlet(e.target.value)}>{item.outletName}</option>
                    })}
                  </select>
                  {errors.outlet && <span className="error">{errors.outlet}</span>}
                </div>
              </div>
              <div>
                <div className="input-element">
                  <label htmlFor="supplier">Supplier</label>
                  <select>
                    {allSuppliers.map((item) => {
                      <option value={supplier} onSelect={() => setSupplier(e.target.value)}>{item}</option>
                    })}
                  </select>
                  {errors.supplier && <span className="error">{errors.supplier}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="Physical Stock">Physical stock</label>
                  <input type="number" placeholder='Physical stock ' value={physicalStock} onChange={(e) => setPhysicalStock(e.target.value)} />
                  {errors.physicalStock && <span className="error">{errors.physicalStock}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="quantity">Stock limit for alert</label>
                  <input type="number" placeholder='Stock limit for alert' value={stockLimit} onChange={(e) => setStockLimit(e.target.value)} />
                  {errors.stockLimit && <span className="error">{errors.stockLimit}</span>}
                </div>
              </div>
            </div>
            <div className="buttons">
              <button onClick={handleClose}>Cancel</button>
              <button type='submit'> {loading ? <Loader /> : 'Save'}</button>
            </div>
          </form>
        </div>
      )}
    </DIV>
  )
}
export default Products
// Keyframe animation for loader
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
  margin-left: 45%;
`;
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

