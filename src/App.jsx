import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [employees, setEmployees] = useState([]);
  const fetchData = async () => {
    const response = await axios.get('https://reqres.in/api/users?per_page=4')
    setEmployees(response.data.data)
  }
  useEffect(() => {
    fetchData()
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <li>{`${employee.first_name} ${employee.last_name}`}</li>
    )
  })
  return (
    <div>
      <h1 data-testid="header">Employee Management</h1>
      <div data-testid="employee-list">
      {employeeList}
      </div>
    </div>
  )
}

export default App
