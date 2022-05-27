import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  // const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
      Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position, 
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label className='labels'>Name:</label>
        <input type="text" onChange={(event) => {setName(event.target.value)}}/>
        <label className='labels'>Age:</label>
        <input type="number" onChange={(event) => {setAge(event.target.value)}}/>
        <label className='labels'>Country:</label>
        <input type="text" onChange={(event) => {setCountry(event.target.value)}}/>
        <label className='labels'>Position:</label>
        <input type="text" onChange={(event) => {setPosition(event.target.value)}}/>
        <label className='labels'>Wage (year):</label>
        <input type="number" onChange={(event) => {setWage(event.target.value)}}/>
        <button className='button' onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
