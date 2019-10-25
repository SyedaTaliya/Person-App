import React from "react";
import "../components/Person.css";
import PersonInfo from "./PersonInfo";
import PersonEdit from "./PersonEdit";
import PropType from "prop-types";
import { Card } from "react-bootstrap";

function Person(props) {
  return (
    <div className="person">

      <Card style={{ width: "18rem" }}>
        <PersonInfo details={props.details} />
      {/* {props.person.isEditMood ? <PersonEdit details={props.person}/> : <PersonInfo detai={props.person} />} */}
      </Card>
    </div>
  ); 
}

export default Person;

Person.propTypes = {
  person: PropType.object
};
