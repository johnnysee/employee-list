import React from 'react'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  
  const fetchData = async () => {
    const response = await axios.get('https://reqres.in/api/users?per_page=4')
    setEmployees(response.data.data)
  };

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
      <Header size="huge" data-testid="header">Employee Management</Header>
      <Header data-testid="employee-list"</Header>
      <Header {employeeList}</Header>
    </Container>
  )
})

  return (

  )
}

export default EmployeeList
