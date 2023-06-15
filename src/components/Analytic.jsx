import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GrTransaction } from 'react-icons/gr';
import { FcPositiveDynamic } from 'react-icons/fc';
import { GiReceiveMoney } from 'react-icons/gi';
import { GiPayMoney } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../utils/constant';

function Analytic(props) {
    const [revenue, setRevenue] = useState(0);
    const [transactionsNo, setTransactionsNo] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const business_id = props._id;
                const no_of_transactions = +props.mpesa_transactions + +props.cash_transactions + +props.credit_card_transactions; //I'm using unary operator
                setTransactionsNo(no_of_transactions);

                const mpesaTrans = (await axios.post(`${baseURL}/fetchMpesaTrans`, { business_id })).data.data;
                const creditCardTrans = (await axios.post(`${baseURL}/fetchCreditCardTrans`, { business_id })).data.data;
                const cashTrans = (await axios.post(`${baseURL}/fetchCashTrans`, { business_id })).data.data;


                let mpesaSum = 0;
                if (mpesaTrans.length !== 0) {
                    const mpesaAmounts = mpesaTrans.map(item => item.TransAmount);
                    mpesaSum = mpesaAmounts.reduce((total, amount) => total + amount, 0);
                };
                let creditCardSum = 0;
                if (creditCardTrans.length !== 0) {
                    const creditCardAmounts = creditCardTrans.map(item => item.TransAmount);
                    creditCardSum = creditCardAmounts.reduce((total, amount) => total + amount, 0);
                };
                let cashSum = 0;
                if (cashTrans.length !== 0) {
                    const cashAmounts = cashTrans.map(item => item.TransAmount);
                    cashSum = cashAmounts.reduce((total, amount) => total + amount, 0);
                };
                const dailyRevenue = cashSum + mpesaSum + creditCardSum;
                const formattedRevenue = dailyRevenue.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'KES', // Adjust the currency code as needed
                });
                setRevenue(formattedRevenue);
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };

        fetchData();
    }, []);


    return (
        <Section>
            <div className="analytic">
                <div className="design">
                    <div className="logo">
                        <GiReceiveMoney />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Revenue</h6>
                </div>
                <div className="money">
                    <h5>{`${revenue}`}</h5>
                </div>
            </div>
            <div className="analytic">
                <div className="design">
                    <div className="logo">
                        <GiPayMoney />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Expense</h6>
                </div>
                <div className="money">
                    <h5>KES 1,200</h5>
                </div>
            </div>
            <div className="analytic">
                <div className="design">
                    <div className="logo">
                        <FcPositiveDynamic />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Profit Margin</h6>
                </div>
                <div className="money">
                    <h5>KES 500</h5>
                </div>
            </div>
            <div className="analytic">
                <Link to="transactions" className="link">
                    <div className="design">
                        <div className="logo">
                            <GrTransaction />
                        </div>
                    </div>
                    <div className="transfer">
                        <h6>Transactions</h6>
                    </div>
                    <div className="money">
                        <h5>{transactionsNo}</h5>
                    </div>
                </Link>
            </div>
        </Section>
    );
}

export default Analytic;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  margin: 0 50px;

  .analytic {
    justify-content: space-between;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 1rem;
    color: black;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.5s ease-in-out;
    width: 200px;

    .link {
      text-decoration: none;
    }

    .design {
      .logo {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          font-size: 3rem;
        }
      }
    }

    .transfer {
      text-align: center;
      margin-top: 20px;
      color: black;
      font-size: 18px;
      text-decoration: none;
    }

    .money {
      margin-top: 20px;
      font-size: 22px;
      text-align: center;
      text-decoration: none;
    }
  }
`;
