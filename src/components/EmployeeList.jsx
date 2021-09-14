import React, {useState, useEffect} from 'react'
import { Item } from 'semantic-ui-react';
import axios from 'axios';
import EmployeeModal from './EmployeeModal'

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
      <Item key={employee.id} className="employee-item">
      <Item.Image
      className="avatar"
      circular
      size ="tiny"
      alt={employee.first_name}
      src={employee.avatar}
      />
      <Item.Content verticalAlign="middle">
        <Item.Header className="name">
          {employee.first_name} {employee.last_name}
        </Item.Header>
        <Item.Extra>
          <EmployeeModal id={employee.id} />
        </Item.Extra>
      </Item.Content>
      </Item>
    )
  })

  return <Item.Group id="employee-list">{employeeList}</Item.Group>
};


export default EmployeeList
