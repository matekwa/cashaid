import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Toolbar } from '@syncfusion/ej2-react-grids';
import '@syncfusion/ej2-react-grids/styles/material.css';

const Transactions = ({data}) => {
    const loadingIndicator = { indicatorType: 'Shimmer' };
    const toolbarOptions = ['Search'];
    return (
        <div>
            <GridComponent
                dataSource={data}
                allowPaging={true}
                allowFiltering={true}
                enableHover={false}
                rowHeight={38}
                height='400'
                pageSettings={{ pageSize: 50 }}
                allowSorting={true}
                allowSelection={true}
                loadingIndicator={loadingIndicator}
                enableHeaderFocus={true}
                toolbar={toolbarOptions}
            >
                <ColumnsDirective>
                    <ColumnDirective type='checkbox' allowSorting={false} allowFiltering={false} width='60'></ColumnDirective>
                    <ColumnDirective field="customer_name.firstName" headerText="First Name" width="150" />
                    <ColumnDirective field="customer_name.lastName" headerText="Last Name" width="150" />
                    <ColumnDirective field="TransTime" headerText="Transaction Time" width="200" />
                    <ColumnDirective field="TransAmount" headerText="Transaction Amount" width="150" />
                    <ColumnDirective field="MSISDN" headerText="Phone Number" width="150" />
                    <ColumnDirective field="transaction_type" headerText="Transaction Type" width="150" />
                    <ColumnDirective field="status" headerText="Status" width="150" />
                </ColumnsDirective>
                <Inject services={[Page, Sort, Toolbar]} />
            </GridComponent>
        </div>
    );
}

export default Transactions;