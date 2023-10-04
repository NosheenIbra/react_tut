import { useState, useEffect } from "react";
import Header from "./Header";
import { TextField, Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import Fields from './Fields'
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

function App() {
  //  in useeffect hook 1st body content is used after tha jsx and at the last usEFFeect is called
  // useEffect has 3 conditions to use 1. with some condition mean dependencies 2, without condition ,
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      //  we use string but back tick help to write java script  variable within  a string  anywhere
      const res =
        await fetch(` https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const get = await res.json();
      setData(get);
      console.log(get);
    }
    getData();
    //  To display title on browser insted of vite and react project we use this in useEffect 
    document.title =` (${state}) Employess online  `
  }, [state]);

  return (
    <>
      <div className="App">
        <Header />
        {/*  event function is also called call in function or arrow function */}
        <button onClick={(e) => setState(state + 2)}> Click me {state}</button>
        {
            data.map((element, index) =>{
              return(
                <div className="dataa" key={index}>
                <h2>{element.firstName}</h2>
                <h2>{element.lastName}</h2>
                <h2>{element.email}</h2>
                </div>
              )


              
            }

            )
   
        }
      </div>
    </>
  );
}

export default App;
