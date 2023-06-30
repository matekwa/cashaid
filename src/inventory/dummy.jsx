import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import axios from 'axios';
import { baseURL } from '../utils/constant';
import { useLocation } from 'react-router-dom';
import JsBarcode from 'jsbarcode';


const Products = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bus_id = searchParams.get('bus_id');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [productLabel, setProductLabel] = useState('');
  const [productNature, setProductNature] = useState('');
  const [outlet, setOutlet] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [wholesalePrice, setWholesalePrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [skuNumber, setSKUNumber] = useState('');
  const [supplier, setSupplier] = useState('');
  const [physicalStock, setPhysicalStock] = useState('');
  const [stockLimit, setStockLimit] = useState('');
  const [measurementUnit, setMeasurementUnit] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [VAT, setVAT] = useState(false);
  const [tax, setTax] = useState('');
  const [allSuppliers, setAllSuppliers] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allOutlets, setAllOutlets] = useState([]);
  const natureOfProduct = ["Raw Material", "Components & Parts", "Merchandise", "Consumables", "Perishable Goods", "Supplies"];
  const vat = ["Incl VAT", "Excl VAT"];
  const barcodeRef = useRef(null);

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

  function generateBarcode() {
    JsBarcode(barcodeRef.current, skuNumber, { format: 'CODE128' });
  }

  const renderComponent = () => {
    setShowAddProduct(true);
  }

  const handleClose = () => {
    setShowAddProduct(false);
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validations
    const validationErrors = {};
    if (!productLabel) {
      validationErrors.productLabel = 'Product label is required';
    }
    if (!productNature) {
      validationErrors.productNature = 'Product nature is required';
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
      validationErrors.wholesalePrice = 'Wholesale price is required';
    }
    if (!retailPrice) {
      validationErrors.retailPrice = 'Retail price is required';
    }
    if (!skuNumber) {
      validationErrors.skuNumber = 'SKU number is required';
    }
    if (!supplier) {
      validationErrors.supplier = 'Please choose a supplier';
    }
    if (!physicalStock) {
      validationErrors.physicalStock = 'Physical stock is required';
    }
    if (!stockLimit) {
      validationErrors.stockLimit = 'Stock limit is required';
    }
    if (!measurementUnit) {
      validationErrors.measurementUnit = 'Measurement unit is required';
    }
    if (!storageLocation) {
      validationErrors.storageLocation = 'Storage location is required';
    }
    if (!tax) {
      validationErrors.tax = 'Please choose a tax';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const payload = {
      // ...existing code...
    };

    try {
      // Send the payload to the server or perform the necessary actions
      await axios.post(`${baseURL}/add-product`, payload);

      // Reset form values
      setProductLabel('');
      setProductNature('');
      setDescription('');
      setCategory('');
      setWholesalePrice('');
      setRetailPrice('');
      setSKUNumber('');
      setSupplier('');
      setPhysicalStock('');
      setStockLimit('');
      setMeasurementUnit('');
      setStorageLocation('');
      setVAT(false);
      setTax('');
      setErrors({});

      // Show success message or perform other actions
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      // Show error message or perform other actions
      alert('Error adding product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch suppliers from the server or set them manually
    const fetchSuppliers = async () => {
      try {
        const response = await axios.get(`${baseURL}/suppliers`);
        setAllSuppliers(response.data);
      } catch (error) {
        console.error('Error fetching suppliers:', error);
        // Show error message or perform other actions
        alert('Error fetching suppliers. Please try again.');
      }
    };

    // Fetch categories from the server or set them manually
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseURL}/categories`);
        setAllCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Show error message or perform other actions
        alert('Error fetching categories. Please try again.');
      }
    };

    // Fetch outlets from the server or set them manually
    const fetchOutlets = async () => {
      try {
        const response = await axios.get(`${baseURL}/outlets`);
        setAllOutlets(response.data);
      } catch (error) {
        console.error('Error fetching outlets:', error);
        // Show error message or perform other actions
        alert('Error fetching outlets. Please try again.');
      }
    };

    fetchSuppliers();
    fetchCategories();
    fetchOutlets();
  }, []);

  return (
    <DIV>
      {/* ...existing code... */}
      {showAddProduct && (
        <div className='addProduct'>
          <form onSubmit={handleAddProduct}>
            {/* ...existing code... */}
            <div className="input-element">
              <label htmlFor="serial no.">Stock Keeping Unit No.</label>
              <input type="text" placeholder='SKU No.' value={skuNumber} onChange={(e) => setSKUNumber(e.target.value)} disabled={loading} />
              {errors.skuNumber && <div className="error">{errors.skuNumber}</div>}
            </div>
            {/* ...existing code... */}
            <div className="input-element">
              <label htmlFor="tax">Tax</label>
              <select name="tax" value={tax} onChange={(e) => setTax(e.target.value)} disabled={loading}>
                <option value="">Select Tax</option>
                {vat.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
              {errors.tax && <div className="error">{errors.tax}</div>}
            </div>
            {/* ...existing code... */}
            <div className="input-element">
              <label htmlFor="barcode">Barcode</label>
              <div className="barcode" ref={barcodeRef}></div>
              <button type="button" onClick={generateBarcode} disabled={loading}>Generate Barcode</button>
            </div>
            {/* ...existing code... */}
            <div className="input-element">
              <button type="submit" disabled={loading}>Add Product</button>
            </div>
          </form>
        </div>
      )}
    </DIV>
  );
}

export default Products;
