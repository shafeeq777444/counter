import{useState} from 'react'
import  './App.css'

function App() {
 const [counter,setCounter]=useState(0)
 const handleAdd=()=>{setCounter(counter+1)}
const handleMin=()=>{setCounter(counter-1)}
  return (
    
    <div className="outer">
      <p>{counter}</p>
      
      <div className="buttonss">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleMin}>−</button>
      </div>
    </div>
    
  )
}

export default App
