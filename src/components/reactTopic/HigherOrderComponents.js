import React, {useState} from 'react'

const HigherOrderComponents = () => {
  return (
    <div>
      <HOCRed comp={Counter}/>
      <HOCGreen comp={Counter}/>
    </div>
  )
}

// Higher Order Component
//-- higher-order component is the takes a component as a input  and returns a component as output.
const HOCRed = (props) => {
    return <h2 style={{backgroundColor:'red',width:100}}><props.comp/></h2>
}

const HOCGreen = (props) => {
    return <h2 style={{backgroundColor:'green',width:100}}><props.comp/></h2>
}
// Higher Order Component


const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h3>{count}</h3>
            <button className="btn btn-dark" onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}





export default HigherOrderComponents
