// To finish out the process of displaying all of the state from the API, you are going to make a new component that will display information about the service tickets that your employees work on for customers. It will display the following information for each ticket.

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

// Description of the service ticket
// Name of the customer
// Name of the employee doing the repair

export const ServiceTickets = () => {
 const [serviceTickets, setServiceTickets] = useState([])
 const history = useHistory()

    useEffect(
        () => {
            fetchServiceTickets()
        },
        []
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => {
                fetchServiceTickets()
            })
    }

    const fetchServiceTickets = () => {
        fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                .then(res => res.json())
                .then((serviceTicketArray) => {
                    setServiceTickets(serviceTicketArray)
                })
    }

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
                                        <p key={`ticket--${ticketObj.id}`} className={ticketObj.emergency ? "emergency" : ""}>
                                        {ticketObj.emergency ? "🚑" : ""} <Link to={`/tickets/${ticketObj.id}`}>{ticketObj.description}</Link> submitted by {ticketObj.customer.name} assigned to {ticketObj.employee.name}
                                        <button onClick={() => {deleteTicket(ticketObj.id)}}>Delete</button>


                                        </p>
                                    </>
                        }
                    )
                }
            </div>
        </>
    )
}

