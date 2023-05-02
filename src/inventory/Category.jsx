import React from 'react'
import styled from 'styled-components'

const Category = () => {
    const [showModal, setShowModal] = React.useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <DIV>
            <div className="category">
                <div>
                    <p>Add categories for all your products, this makes navigation of different products easy during cashing out.</p>
                </div>
                <div>
                    <button onClick={handleOpenModal}>Add Category</button>
                    {showModal && (
                        <ModalWrapper>
                            <ModalContent>
                                <h2>Product Category</h2>
                                <form action="">
                                    <input type="text" placeholder='Category name' autoFocus/>
                                    <div className="buttons">
                                        <Button onClick={handleCloseModal}>Cancel</Button>
                                        <Button >Save</Button>
                                    </div>
                                </form>
                            </ModalContent>
                        </ModalWrapper>
                    )}
                </div>
            </div>
            <div className="category-list">
                <div className="img">

                </div>
                <p>Your category list is empty.</p>
            </div>
        </DIV>
    )
}

export default Category
const DIV = styled.div`
  .category{
        background-color: #F5F5FD;
        margin:10px 0;
        padding: 5rem;
        display:flex;
        justify-content: space-between;

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
    .category-list{
        background: #fff;
        color: gray;
        margin: 3px 0;
        padding: 4rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;


        .img{
            width: 100%;
            hight: 220px;
        }
    }
`
    ;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  form{
    
    input{
        outline: none;
        padding: 10px;
        font-size: 15px;
        font-familly: 'serif';
        color: black;
        border: none;
        background: #F5F5FD;
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

    .buttons{
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
    }
  }
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;