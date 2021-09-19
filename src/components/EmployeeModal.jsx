import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Image, Header, Button } from "semantic-ui-react";

const EmployeeModal = ({id}) => {
  const [open, setOpen] = useState(false);
  const [singleEmployee, setSingleEmployee] = useState({});

  useEffect(() => {
    const getEmployee = async () => {
      let response = await axios.get(`https://reqres.in/api/users/${id}`);
      setSingleEmployee(response.data.data);
    };  
    getEmployee();
  }, [getEmployee]);

  return (
  <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={
      <Button size="tiny" positive className="view-button">
        View
      </Button>
    }
  >
    <Modal.Content image id="modal-container">
      <Image
        className="image"
        size="small"
        src={singleEmployee.avatar}
        wrapped
      />
      <Modal.Description>
        <Header className="name">
          {singleEmployee.first_name} {singleEmployee.last_name}
        </Header>
        <p className="email">Email: {singleEmployee.email}</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color="black">Edit</Button>
      <Button negative>Delete</Button>
    </Modal.Actions>
  </Modal>
  );
};

export default EmployeeModal;
