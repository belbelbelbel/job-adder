import React, { useState } from 'react'
import "./Table.css"
export default function Table({charactersdata}) {
    const [deleter,setdeleter] = useState(charactersdata)
    function handleremove(index) {
        const initialremove = deleter.filter((_,i) => i !== index);
      setdeleter(initialremove)
    }
  return (
    <div>
        <h1>asdfhg</h1>
        <table>
            <tbody>
               {deleter.map((item,key) =>(
                <tr key={key}>
                    <td>{item.name}</td>
                    <td>{item.job}</td>
                    <td><button onClick={()=>{handleremove(key)}}>Delete</button></td>
                </tr>
               ))}
            </tbody>
        </table>
    </div>
  )
}
