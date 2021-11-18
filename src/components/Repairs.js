import React from "react";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { ServiceTickets } from "./serviceTickets/ServiceTickets";


export const Repairs = () => {

    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>
            <CustomerList />
            <h1>Employees</h1>
            <EmployeeList />
            <h1>Service Tickets</h1>
            <ServiceTickets />
        </>
    )
}

