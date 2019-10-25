import React from "react";
import "../components/Persons.css";

function Persons() {
  const persons = [
    {
      name: "Alisha",
      age: "20",
      description: "student in Iqra University"
    },

    {
      name: "Sana",
      age: "12",
      description: "student in UIT"
    },

    {
      name: "Rameen",
      age: "24",
      description: "Dentist at Agha Khan"
    },

    { name: "Farheen", age: "22", description: "expert in all feilds" }
  ];

  
    return (
      <div className="person">

        <h1>Persons</h1>
        {persons.map(person => <Persons />)}

        
      </div>
    );
  }


export default Persons;
