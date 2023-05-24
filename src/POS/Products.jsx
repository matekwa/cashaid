import React from 'react'
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi'

const Products = () => {
  return (
    <Section>
          <div className="search">
              <BiSearch />
              <input type="text" placeholder="Search item" />
          </div>
          <div className="products">
            <div>
                <button>Breakfast</button>
            </div>
            <div>
                <button>Lunch</button>
            </div>
            <div>
                <button>Dinner</button>
            </div>
            <div>
                <button>Drinks</button>
            </div>
            <div>
                <button>Chrome</button>
            </div>
              <div>
                  <button>Chrome</button>
              </div>
              <div>
                  <button>Chrome</button>
              </div>
              <div>
                  <button>Chrome</button>
              </div>
              <div>
                  <button>Chrome</button>
              </div>
              <div>
                  <button>Chrome</button>
              </div>
          </div>
    </Section>
  )
}

export default Products
const Section = styled.section`
background: white;
padding: 1rem;
position: relative;

.search {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
    marrgin: 5px;
    svg{
        color: grey;
    }
    input{
        background-color: transparent;
        border: none;
        color: grey;
        &:focus{
            outline: none;
        }
        &::placeholder {
            color: grey;
            }
        }
    }

    .products{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 8fr));
        gap: 10px;
        grid-auto-rows: 100px;

        div{
            margin-top: 2rem;
            button{
                width: 8rem;
                height: 8rem;
                color: black;
                background: #F5F5FD;
                border: none;
                font-size: 20px;
                padding: 1rem;
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