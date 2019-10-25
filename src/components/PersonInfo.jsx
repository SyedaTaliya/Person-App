import React from "react";
import "../components/PersonInfo.css";
import PropType from "prop-types";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function PersonInfo(props) {
  return (
    <div className="person-info">
      <Card.Img variant="top" src={props.details.img} />
      <Card.Body>
        <Card.Title>{props.details.name}</Card.Title>
        <Card.Text>{props.details.age}</Card.Text>
        <Card.Text>{props.details.description}</Card.Text>
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

export default PersonInfo;

PersonInfo.propTypes = {
  person: PropType.object
};
