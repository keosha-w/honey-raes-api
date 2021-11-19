import { useState } from "react"
import { useHistory } from "react-router";



export const EmployeeForm = () => {

    const [app, updateApp] = useState({
        name: "", 
        specialty: ""
    });

    const history = useHistory()

    const registerEmployee = (event) => {
        event.preventDefault()

        const newEmployee = {
            name: app.name, 
            specialty: app.specialty
        }

        const fetchOptions = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOptions)
            .then(() => {
                history.push("/employees")
            })
    }



    return (
        <form className="employee__app">
            <h2 className="employee__app__title">New Employee Registration</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (event) => {
                                const copy = {...app}
                                copy.name = event.target.value
                                updateApp(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Specialty"
                        onChange={
                            (event) => {
                                const copy = {...app}
                                copy.specialty = event.target.value
                                updateApp(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={registerEmployee}>
                Register Employee
            </button>
        </form>
    )

}