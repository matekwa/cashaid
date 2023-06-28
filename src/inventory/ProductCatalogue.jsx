import React from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Category from './Category';
import Suppliers from './Suppliers';
import Product from './Products';
import Brand from './Brand'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ProductCatalogue = () => {

    const [value, setValue] = React.useState('category');
    const [component, setComponent] = React.useState('category');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderComponent = () =>{
        switch(component){
            case 'category':
                return <Category />;
            case 'suppliers':
                return <Suppliers />;
            case 'products':
                return <Product />;
            case 'brand':
                return <Brand />;    
            default:
                return <Category />;
        }
    }

    return (
        <Section>
            <div className='heading'>
                <div className="back">
                    <Link to='inventory-manager'>
                        <IoMdArrowRoundBack />
                    </Link>
                </div>
                <div className="title">
                    <h2>Product Catalogue</h2>
                </div>
            </div>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="category" label="Product category" onClick={()=>setComponent('category')} />
                    <Tab value="supplier" label="Suppliers" onClick={()=>setComponent('suppliers')} />
                    <Tab value="supplier" label="Brand" onClick={()=>setComponent('brand')} />
                    <Tab value="products" label="Products" onClick={()=>setComponent('products')} />
                </Tabs>
            </Box>
            {renderComponent()}
        </Section>
    )
}

export default ProductCatalogue
const Section = styled.section`
    margin-left: 5vw;
    margin-right: 14px;
    padding: 2rem;
    

    .heading{
        background-color: #0C2340;
        padding: 3rem;
        display: flex;
        color: white;
        width: 100%;
        

        .back{
            width: 20%;
            svg{
                color: white;
                font-size: 20px;
            }
            svg:hover{
                transform: scale(1.5);
                font-weight: bold;
            }
        }

        .title{
            width: 80%;
            text-align: center;
        }
    }
`
    ;