import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import List from "./components/List/List";
import {useState} from "react";


function App() {
  const dispatch = useDispatch()
  const number  = useSelector(state => state.number)
  console.log(number)
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const addNumber =()=>{
      dispatch({type:"ADD" , payload: Number(inputValue)})
    }
    const clearNumber =()=>{
      dispatch({type:"CLEAR" })
    }
    const minusNumber =()=>{
      dispatch({type:"MINUS" , payload: Number(inputValue) })
    }
    
    const multiplyNumber =()=>{
      dispatch({type:"MULTIPLY" , payload: Number(inputValue)})
    }
    
    const deviateNumber = ()=>{
      dispatch({type:"DEVIATE" , payload: Number(inputValue)})
    }
  
  
    
  return (
      <div className="App">
          <input style={{height:"50px" , width:"200px" , background:"red" , color:"white"}} type="text" value={inputValue} onChange={handleInputChange}/>

          <div className="cont">
              <button onClick={() => addNumber()}>add</button>
              <button onClick={() => clearNumber()}>clear</button>
              <button onClick={() => minusNumber()}>minus</button>
              <button onClick={() => multiplyNumber()}>multiply</button>
              <button onClick={() => deviateNumber()}>deviate</button>
          </div>

          <List/>
      </div>
  );
}

export default App;
