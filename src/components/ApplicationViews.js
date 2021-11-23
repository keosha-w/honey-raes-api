import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { Single_Employee } from "./employees/Employee"

import { ServiceTickets } from "./serviceTickets/ServiceTickets"
import { SingleTicket } from "./serviceTickets/SingleTicket"
import { TicketForm } from "./serviceTickets/TicketForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <Single_Employee />
            </Route>
            <Route exact path="/serviceTickets">
                <ServiceTickets />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <SingleTicket />
            </Route>
            <Route path="/serviceTickets/create">
                <TicketForm />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

        </>
    )
}
