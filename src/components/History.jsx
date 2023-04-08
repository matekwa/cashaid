import React from 'react'
import styled from 'styled-components'
import apple from "../assets/avatar.jpg"

function History() {
    return (
        <Section>
        <div className="orders">
      <div className="orders__details">
          <div>
                <h4>Recent transactions</h4> 
              
          </div>
          <div> 
          <h6>Today's transaction</h6> 
            
          </div>
        </div>
        <div className="orders__table">
            <table>
            <tr>
              <td><img src={apple} alt="" /></td>
              <td >Matekwa Ronald</td>
              <td>14:10:32 AM</td>
              <td>+ KES 350.00</td>
              <td >Success</td>
              <td >Remove</td>
            </tr>
            <tr>
                <td><img src={apple} alt="" /></td>
                <td >Peter Ngui</td>
                <td>14:10:32 AM</td>
                <td>+ KES 50.00</td>
                <td >Success</td>
                <td >Remove</td>
            </tr>
            <tr>
                <td><img src={apple} alt="" /></td>
                <td >John Mweu</td>
                <td>14:10:32 AM</td>
                <td>+ KES 3,500.00</td>
                <td>Success</td>
                <td >Remove</td>
            </tr>
            
            </table>
        </div>
        </div>
        </Section>
    )
}

export default History
const Section = styled.section`

.orders {
    margin-top: 4rem;
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 1rem ;

        div {
            display: flex;
            gap: 1rem;
           color: grey;
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        color: grey;
        table {
            border-collapse: collapse;
            width: 100%;
             td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
               
                img{
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 3rem;
            }
                
            }
            
        }
    }
}
`;