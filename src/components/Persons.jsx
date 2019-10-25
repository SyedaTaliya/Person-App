import React from "react";
import "../components/Persons.css";
import Person from "./Person";

function Persons() {
  const persons = [
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLYfSB0nYMTR5sDbQLO1y9_eL4uYbZxuXYde7RREdN9pZkUDWg",
      name: "Alisha",
      age: "20",
      description: "student in Iqra University",
      isEditMood: true
    },

    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-zSh1rL9TcVGlfnah8vAMF2x_dOC61oswQfzIzIhLx1vcFRKu",
      name: "Sana",
      age: "12",
      description: "student in UIT",
      isEditMood: false
    },

    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNMmmjTRX07hsrFiSni_XK4J1UIzGaJh5ZFmqWgF2T8JUaWIRU",
      name: "Rameen",
      age: "24",
      description: "Dentist at Agha Khan",
      isEditMood: true

    },

    {
      img:"https://i.pinimg.com/originals/c9/27/e7/c927e7adc00205ebc65ee1c891749f34.jpg",
      name: "Farheen",
      age: "22",
      description: "expert in all feilds",
      isEditMood: true

    }
  ];

  return (
    <div className="persons">
      <h1>Persons</h1>

      {persons.map(person => (
        <Person details={person} />
      ))}
    </div>
  );
}

export default Persons;
