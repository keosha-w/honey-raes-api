// To finish out the process of displaying all of the state from the API, you are going to make a new component that will display information about the service tickets that your employees work on for customers. It will display the following information for each ticket.

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

// Description of the service ticket
// Name of the customer
// Name of the employee doing the repair

export const ServiceTickets = () => {
 const [serviceTickets, setServiceTickets] = useState([])
 const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                .then(res => res.json())
                .then((serviceTicketArray) => {
                    setServiceTickets(serviceTicketArray)
                })
        },
        []
    )



    return (
        <>
            <div>
                <button onClick={() => history.push("/serviceTickets/create")}>
                    Create Ticket
                </button>
            </div>
            <div>
                {
                    serviceTickets.map(
                        (ticketObj) => {
                            return <>
                                        <p key={`ticket--${ticketObj.id}`}>
                                        {ticketObj.description} submitted by {ticketObj.customer.name} assigned to {ticketObj.employee.name}
                                        </p>
                                    </>
                        }
                    )
                }
            </div>
        </>
    )
}

