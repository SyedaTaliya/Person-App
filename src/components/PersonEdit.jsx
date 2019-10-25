import React from "react";
import "../components/PersonEdit.css";
import PropType from "prop-types";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


function PersonEdit(props) {
    return (
      <div className='person-edit'>
         <Card.Body>
        <Card.Title>Person Edit</Card.Title>
        <Card.Text>
          <input type="text" value={props.details.name}/>
          <input type="number" value={props.details.age} />
          <textarea>{props.details.description}</textarea>
        </Card.Text>
        <ButtonGroup className="group-button" aria-label="Basic example">
          <Button variant="secondary">
            Edit <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button variant="secondary">
            Delete <FontAwesomeIcon icon={faTrash} />
          </Button>
        </ButtonGroup>
      </Card.Body>
        </div>


    );
  }
  
  export default PersonEdit;

PersonEdit.propTypes = {
  person: PropType.object
};
