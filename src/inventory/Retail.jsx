import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import { useLocation } from 'react-router-dom';
import JsBarcode from 'jsbarcode';
import { AiOutlineScan } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';


const Retail = () => {
    const [hasNoBarcode, setHasNoBarcode] = useState(true);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [allSuppliers, setAllSuppliers] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [allOutlets, setAllOutlets] = useState([]);
    const [allBrands, setAllBrands] = useState([]);
    const natureOfProduct = ["Components & Parts", "Merchandise", "Consumables", "Perishable Goods", "Supplies & Equipments"];
    const barcodeRef = useRef(null);
    const [shopName, setShopName] = useState('');


    const bus_id = searchParams.get('bus_id');
    const [productLabel, setProductLabel] = useState('');
    const [productNature, setProductNature] = useState('');
    const [outlet, setOutlet] = useState('');
    const [unit, setUnit] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [wholesalePrice, setWholesalePrice] = useState('');
    const [retailPrice, setRetailPrice] = useState('');
    const [supplier, setSupplier] = useState('');
    const [physicalStock, setPhysicalStock] = useState('');
    const [stockLimit, setStockLimit] = useState('');
    const [brand, setBrand] = useState('');
    const [measurementUnit, setMeasurementUnit] = useState('');
    const [storageLocation, setStorageLocation] = useState('');
    const [IncVAT, setIncVAT] = useState(false);
    const [tax, setTax] = useState('');
    const [barcodeValue, setBarcodeValue] = useState('');
    

    function generateSKU() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const length = 8;
        let sku = '';
        
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          sku += characters[randomIndex];
        }
        
        return sku;
      }
      
    
      const generateBarcode = () => {
        const barcodeValue = generateSKU();
        setBarcodeValue(barcodeValue);
      };

      const renderComponent = () => {
        setShowAddProduct(true);
      }
      const handleClose = () => {
        setShowAddProduct(false);
      }


      let barcodeString = '';
      const scan = ()=>{
        setHasNoBarcode(false);
        const handleKeydown = (e) => {
          //Check if enter (ke code 13) is pressed the handle scan
          if(e.keyCode === 13 && barcodeString.length > 3){
            handleBarcodeScan(barcodeString);
            return
          }
          //check if shift key is pressed
          if(e.keyCode === 16){
            return
          }
          barcodeString += e.key;
          //set timeout to clear barcodeString variable
          setTimeout(()=>{
            barcodeString = '';
          }, 100);
        }
        document.addEventListener('keydown', handleKeydown);
        return () =>{
          document.removeEventListener('keydown', handleKeydown);
        }
      }
      const handleBarcodeScan = (barcodeInputString) => {
        setBarcodeValue(barcodeInputString);
      }
      useEffect(() => {
        try{
          const shop = axios.get(`${baseURL}/fetchStoreName`, { params: { ownerID: bus_id } });
          setShopName(shop.data.data);
        } catch(error){
          console.log(`Error feching shop name with error value of ${error} `);
        }
        if (barcodeValue) {
          JsBarcode(barcodeRef.current, barcodeValue), {
            format: 'CODE128',
            displayValue: true,
            text: shopName,
            textPosition: 'top'
          };
        }
      }, [barcodeValue]);

      useEffect(() => {
        const getData = async () => {
          try {
            const suppliers = await axios.get(`${baseURL}/fetchSuppliers`, { params: { ownerID: bus_id } });
            const categories = await axios.get(`${baseURL}/fetchCategories`, { params: { ownerID: bus_id } });
            const outlets = await axios.get(`${baseURL}/fetchOutlets`, { params: { ownerID: bus_id } });
            const brands = await axios.get(`${baseURL}/fetchBrands`, { params: { ownerID: bus_id } });

            setAllCategories(categories.data.data);
            setAllOutlets(outlets.data.data);
            setAllSuppliers(suppliers.data.data);
            setAllBrands(brands.data.data);
          } catch (error) {
            console.log('Error fetching product data', error);
          }
        }
          getData();
    
      }, []);


      const handlePrint = () => {
        window.print();
      };
    
      useEffect(() => {
        const barcodeElement = barcodeRef.current;
        if (barcodeElement) {
          barcodeElement.addEventListener('contextmenu', handlePrint);
        }
        return () => {
          if (barcodeElement) {
            barcodeElement.removeEventListener('contextmenu', handlePrint);
          }
        };
      }, []);

        //Handle add product function beolow:
        const handleAddProduct = async (e) => {
            e.preventDefault();
            setLoading(true);
        
            //Validations
            const validationErrors = {};
            if (!productLabel) {
              validationErrors.productLabel = 'Product name is required';
            }
            if (!productNature) {
              validationErrors.productNature = 'Product nature is required';
            }
            if (!brand) {
                validationErrors.brand = 'Choose a product brand';
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
              const payload = {
                productLabel,
                productNature,
                barcodeValue,
                description,
                category,
                wholesalePrice,
                retailPrice,
                supplier,
                physicalStock,
                stockLimit,
                outlet,
                measurementUnit,
                unit,
                tax,
                storageLocation,
                brand,
                ownerID: bus_id
              }
              try {
                await axios.put(`${baseURL}/addRetailProduct`, payload);
                  // Reset form values
                  setProductLabel('');
                  setProductNature('');
                  setDescription('');
                  setCategory('');
                  setWholesalePrice('');
                  setRetailPrice('');
                  setBarcodeValue('');
                  setSupplier('');
                  setBrand('');
                  setPhysicalStock('');
                  setStockLimit('');
                  setMeasurementUnit('');
                  setStorageLocation('');
                  setIncVAT(false);
                  setTax('');
                  setErrors({});
                  alert('Product added successfully!');
              }
              catch (e) {
                if (e.code === "ERR_NETWORK") {
                  console.log('It seems you are offline.');
                } else{
                  console.error('Error adding product:', e);
                }
              } finally {
                setLoading(false);
              }
            } else {
              // Form is invalid, update errors state
              setErrors(validationErrors);
              setLoading(false);
            }
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
          <form onSubmit={handleAddProduct}>
            <div className="form">
              <div>
                <div className="input-element">
                  <label htmlFor="product label">Product name</label>
                  <input type="text" placeholder='Product label' autoFocus value={productLabel} onChange={(e) => setProductLabel(e.target.value)} />
                  {errors.productLabel && <span className="error">{errors.productLabel}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="retail price">Product nature</label>
                  <select value={productNature} onChange={(e) => setProductNature(e.target.value)}>
                    {natureOfProduct.map((item) => {
                      return <option key={item} value={item} >{item}</option>
                    })}
                  </select>
                  {errors.productNature && <span className="error">{errors.productNature}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="Brand">Brand</label>
                  <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                    {allBrands.map((item) => {
                      return <option key={item} value={item} >{item}</option>
                    })}
                  </select>
                  {errors.brand && <span className="error">{errors.brand}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="serial no.">SKU Number</label>
                  <div className="search">
                    <BiSearch />
                    <input type="text" value={barcodeValue} readOnly />
                    <AiOutlineScan onClick={scan}/>
                  </div>
                  {hasNoBarcode && <button onClick={generateBarcode}>Generate barcode label</button>}
                  {hasNoBarcode && <svg ref={barcodeRef} />}
                </div>
              </div>
              <div>
                <div className="input-element">
                  <label htmlFor="description">Description</label>
                  <TextBoxComponent multiline={true} placeholder='Product description' value={description} onChange={(e) => setDescription(e.target.value)} />
                  {errors.description && <span className="error">{errors.description}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="category">Category</label>
                  <select name="category" value={category} onClick={(e) => setCategory(e.target.value)}>
                    {allCategories.map((item) => {
                      return <option key={item._id} value={item._id} >{item.name}</option>
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
                    <div className='input-element-flex'>
                        <input type="number" placeholder='Retail price' value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} />
                        <input type='checkbox' value="Incl VAT" onChange={(e) => setIncVAT(true)}/>
                    </div>
                  {errors.retailPrice && <span className="error">{errors.retailPrice}</span>}
                </div>
                {IncVAT && (<div className="input-element">
                  <label htmlFor="retail price">Tax</label>
                  <div className='input-element-flex'>
                    <input type="number" placeholder='VAT Tax' value={tax} onChange={(e) => setTax(e.target.value)} />
                    <span>%</span>
                  </div>
                </div>)}
                <div className='input-element'>
                  <label htmlFor="Unit of measurement">Unit of measurement</label>
                  <div className='input-element-flex'>
                    <input type="number" value={measurementUnit} onChange={(e) => setMeasurementUnit(e.target.value)} />
                    <input type="text" placeholder='Unit' value={unit} onChange={(e) => setUnit(e.target.value)} />
                  </div>
                </div>
                <div className="input-element">
                  <label htmlFor="Outlet">Outlet</label>
                  <select value={outlet} onChange={(e) => setOutlet(e.target.value)}>
                    {allOutlets.map((item) => {
                      return <option key={item._id} value={item._id} >{item.outletName}</option>
                    })}
                  </select>
                  {errors.outlet && <span className="error">{errors.outlet}</span>}
                </div>
              </div>
              <div>
                <div className="input-element">
                  <label htmlFor="supplier">Supplier</label>
                  <select value={supplier} onSelect={(e) => setSupplier(e.target.value)} >
                    {allSuppliers.map((item) => {
                      return <option key={item._id} value={item.businessName} >{item.businessName}</option>
                    })}
                  </select>
                  {errors.supplier && <span className="error">{errors.supplier}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="Physical Stock">Physical stock</label>
                  <input type="number" placeholder='Physical stock' value={physicalStock} onChange={(e) => setPhysicalStock(e.target.value)} />
                  {errors.physicalStock && <span className="error">{errors.physicalStock}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="quantity">Ideal stock limit</label>
                  <input type="number" placeholder='Stock limit for alert' value={stockLimit} onChange={(e) => setStockLimit(e.target.value)} />
                  {errors.stockLimit && <span className="error">{errors.stockLimit}</span>}
                </div>
                <div className="input-element">
                  <label htmlFor="Storage location">Storage location</label>
                  <input type="text" placeholder='E.g Cabin number' value={storageLocation} onChange={(e) => setStorageLocation(e.target.value)} />
                  {errors.storageLocation && <span className="error">{errors.storageLocation}</span>}
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

export default Retail

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

            .input-element-flex{
                display: flex;
                gap: 0;
            }
            .error{
                coor: red;
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
