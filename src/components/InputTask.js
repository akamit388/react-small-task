import React, { useState } from 'react'

const InputTask = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    
    const submithandler = (e) => {
        e.preventDefault()
        setItems([...items, inputData])
        setInputData('')
    }

    return (
        <>
            <form onSubmit={submithandler}>
                <input type="text" value={inputData} onChange={(e)=> setInputData(e.target.value)} />
                <button type="submit">submit</button>
            </form>

            {
                items.map((ele, index)=>(
                    <div key={index}><h1>{ele}</h1></div>
                ))
            }
        </>
    )
}

// const InputTask = () => {
//     const [data, setData] = useState({ lname: '' })
//     const { lname } = data;

//     const onchangehandler = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value })
//         console.log(data)
//     }

//     const submithandler = (e) => {
//         e.preventDefault()
//         console.log('jdjdjfjdj')
//         setData({ lname: '' })
//     }

//     return (
//         <>
//             <form onSubmit={submithandler}>
//                 <input type="text" name='lname' value={lname} onChange={onchangehandler} />
//                 <button type="submit">submit</button>
//             </form>

//             <h1>{lname}</h1>
//         </>
//     )
// }

export default InputTask
