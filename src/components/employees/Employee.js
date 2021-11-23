import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Single_Employee = () => {
    const [sEmployee, set] = useState({})  // State variable for current ticket object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then((data) => {
                    set(data)
                }
        ,
        [ employeeId ]  // Above function runs when the value of ticketId change
    )})

    return (
        <>
            <section className="employee">
                <h3 className="employee__description">{sEmployee.name} - specialty: {sEmployee.specialty}</h3>
            </section>
        </>
    )
}