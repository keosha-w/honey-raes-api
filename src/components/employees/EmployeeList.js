import React, { useEffect, useState } from "react";
import { useHistory } from "react-router"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const history = useHistory()
    const [specialties, setSpecialty] = useState("") // new state that holds specialties for use in useEffect
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(response => response.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                }
                )
        },
        []
    )

    useEffect(() => {
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
        const justSpecialties = employees.map(emp => emp.specialty) // set new variable to .map over the array
        setSpecialty(justSpecialties.join(", ")) // invoke setSpecialty function and use .join to display as comma seperated values
                
    }, [employees])

    return (
        <>    
            <div>
                <button onClick={() => history.push("/employees/create")}>Create Ticket</button>
            </div>
            <div>
                Specialties: { specialties }
            </div>    
            {
                employees.map(
                    (employeeObj) => {
                        return <h3 key={`employee--${employeeObj.id}`}>{employeeObj.name}</h3>
                    }
                )
            }
        </>
    )
}

