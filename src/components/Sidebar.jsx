import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiHomeAlt } from 'react-icons/bi';
import { BsCreditCard2Front } from 'react-icons/bs';
import { AiOutlineDotChart } from 'react-icons/ai';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import { VscSettingsGear } from 'react-icons/vsc';
import { MdOutlineReceiptLong } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);

  useEffect(() => {
    // Initialize the tooltip library
    window.$('.tooltip-container').tooltip();
  }, []);
  return (
    <Section>
      <div className="top">
        <div className="brand">
          <h3>Cashaid</h3>
        </div>
        <div className="links">
          <ul>
            <li
              className={`tooltip-container ${currentLink === 1 ? 'active' : 'none'}`}
              onClick={() => setCurrentLink(1)}
              data-tip="Home"
            >
              <Link to="/">
                <BiHomeAlt />
              </Link>
            </li>
            <li
              className={currentLink === 2 ? 'active' : 'none'}
              onClick={() => setCurrentLink(2)}
              data-tip="Scheduler"
            >
              <Link to="scheduler">
                <AiOutlineSchedule />
              </Link>
            </li>
            <li
              className={currentLink === 3 ? 'active' : 'none'}
              onClick={() => setCurrentLink(3)}
              data-tip="Inventory Manager"
            >
              <Link to="inventory-manager">
                <AiOutlineDotChart />
              </Link>
            </li>
            <li
              className={currentLink === 4 ? 'active' : 'none'}
              onClick={() => setCurrentLink(4)}
              data-tip="POS Terminal"
            >
              <Link to="pos-terminal">
                <MdOutlineReceiptLong />
              </Link>
            </li>
            <li
              className={currentLink === 5 ? 'active' : 'none'}
              onClick={() => setCurrentLink(5)}
              data-tip="Link Card"
            >
              <Link to="link-card" className="noti">
                <BsCreditCard2Front />
                <span>1</span>
              </Link>
            </li>
            <li
              className={currentLink === 6 ? 'active' : 'none'}
              onClick={() => setCurrentLink(6)}
              data-tip="Loyal Customers"
            >
              <Link to="loyal-customers">
                <FaAward />
              </Link>
            </li>
            <li data-tip="Settings">
              <Link to="settings" className="settings">
                <VscSettingsGear />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Tooltip effect="solid" place="right" />
    </Section>
  );
}

export default Sidebar;

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #ececf6;
  height: 100vh;
  width: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;

  .top {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;

    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5px;
    }

    .settings {
      position: absolute;
      bottom: 0;
      margin-bottom: 10px;
    }

    .links {
      ul {
        margin-bottom: 3rem;

        .active {
          background: white;
          padding: 2px 0;
          margin-left: 7px;
          border-radius: 10px 0 0 10px;
          a {
            color: black;
          }
        }

        li {
          display: flex;
          justify-content: center;
          border-right: 0.2rem solid transparent;
          margin: 1rem 0;
          list-style-type: none;

          a {
            text-decoration: none;
            color: grey;
            font-size: 1.6rem;
            gap: 0 0.4rem;
          }

          .noti {
            display: flex;
            margin-left: 21px;

            span {
              background-color: red;
              font-size: 0.5rem;
              border-radius: 50%;
              padding: 2px 5px 2px 5px;
              color: white;
              margin-bottom: 19px;
              margin-top: -10px;
            }
          }

          transition: 0.3s ease-in-out;

          &:hover {
            a {
              color: black;
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: auto;
    padding: 2rem;

    .top {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .brand {
        width: auto;
        padding: 0;
        margin-right: 2rem;
      }

      .settings {
        position: static;
        margin-bottom: 0;
        margin-left: 2rem;
      }

      .links {
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          li {
            margin: 1rem 1rem;
            border-right: none;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
`;
