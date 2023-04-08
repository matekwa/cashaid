import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
function Balance() {
    return (
        <Section>
            <div className="sales">
                <div className="sales__details">
                    <div>
                        <h4>Performance</h4>
                    </div>
                    <div>
                        <h5>APRIL 2023</h5>
                    </div>
                </div>
                <div className="sales__graph">
                    <ResponsiveContainer width="100%" height="150%">

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" stackId="a" fill="#14121F" />
                        <Bar dataKey="uv" stackId="a" fill="#E5E5F1" />
                     </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Section>
    )
}

export default Balance
const data = [
    {
      name: 'Day 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Day 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Day 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Day 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Day 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Day 6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Day 7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
{
    name: 'Day 8',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page I',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Day 9',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Day 10',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },



  ];
const Section = styled.section`
.sales{
    color: black;
    width: 100%;
    .sales__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        div{
            display: flex;
            gap: 1rem;
            h5{
                color: gray;
            }
        }
    }
    .sales__graph{
        height: 10rem;
        width: 100%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
            color: white !important;
        }
    }
}

`;
