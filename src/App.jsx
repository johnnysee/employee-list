import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Header } from 'semantic-ui-react'

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
    <Container>
    <div>
   
      <Header size="huge" data-testid="header">Employee Management</Header>
      <div data-testid="employee-list">
      {employeeList}
      </div>
    </div>
    </Container>
  )
}

export default App
