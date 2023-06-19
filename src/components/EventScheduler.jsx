import * as React from 'react'
import styled from 'styled-components'
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { Inject, ScheduleComponent, Day, Week, Month, Agenda, EventSettings } from '@syncfusion/ej2-react-schedule'
import Sidebar from './Sidebar';

const EventScheduler = () => {

     let remoteData = new DataManager({
         url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
         adaptor: new WebApiAdaptor,
         crossDomain: true
     });

    return (
        <>
            <Sidebar />
            <Section>
                <div className='heading'>
                    <h3>Upcoming Payments</h3>
                </div>
                <div className='Scheduler'>
                    <ScheduleComponent currentView='Month' EventSettings={remoteData}>
                        
                        <Inject services={[Day, Week, Month, Agenda]} />
                    </ScheduleComponent>
                </div>
            </Section>
        </>
    )
}

export default EventScheduler
const Section = styled.section`
    margin-left: 5vw;
    margin-right: 14px;
    padding: 2rem;
    background-color: #F5F5FD;
    .heading{
        margin: 10px 0;
    }
`
    ;