import React from 'react'
import styled from 'styled-components'
import { Category, ChartComponent, DataLabel, LineSeries, Legend, Tooltip, Inject, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import * as ReactDOM from "react-dom";
import {data} from '../data.js'

const Analytics = () => {
  return (
    <Section>
      <div className="header">
        <h2>Analytics</h2>
      </div>
        <div className="grid">
            <div className='expense'>
                <h5>Expense Analysis</h5>
                <ChartComponent id='charts'>
                  <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='India' type='Bar'>
                    </SeriesDirective>
                  </SeriesCollectionDirective>
                </ChartComponent>;
            </div>
            <div className='dailyPerformance'>
              <h5>Daily Sales Performance</h5>
                Bar
            </div>
            <div className='expense'>
                <h5>Profit Margins</h5>
                Grouped Bar
            </div>
        </div>
    </Section>
  )
}

export default Analytics
const Section = styled.section`
margin-left: 5vw;
padding: 2rem;
height: 60rem;
background-color: #F5F5FD;
.grid{ 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30ch, 5fr));
    gap: 1rem;
   
}
.header{
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px solid white;
}
`
;