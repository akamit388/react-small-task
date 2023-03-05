import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ApiDataSort = () => {
  let [formData, setFormData] = useState([]);
  // let [sorted, setSorted] = useState([]);

  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=1').then((res)=>{
      setFormData(res.data.data)
    })
  },[])

  let sortHandler = () => {
    // alert('dlkldldk')
    let sorted = [...formData].sort((a,b)=> (a>b) - (a<b))
    setFormData(sorted)
  }

  return (
    <>
      <table>
        {
          formData.map((item,index)=>(
            <tr key={index}>
                <th>{item.id}</th>
                <th>{item.first_name}</th>
                <th>{item.last_name}</th>
            </tr>
          ))
        }
        <button onClick={sortHandler}>Sort</button>
      </table>
    </>
  )
}

export default ApiDataSort
