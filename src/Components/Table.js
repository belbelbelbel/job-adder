import React, { useState } from 'react';
import "./Table.css";

export default function Table({ charactersdata }) {
    const [deleter, setDelete] = useState(charactersdata);

    function handleDelete(indexId) {
        const updatedCharacters = deleter.filter((_,i)=> i !== indexId)
        setDelete(updatedCharacters);
    }

    return (
        <div>
            <h1>The Occupation</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Job</td>
                    </tr>
                </thead>
                <tbody>
                    {deleter.map((data, key) => (
                        <tr key={key}>
                            <td>{data.name}</td>
                            <td>{data.job}</td>
                            <td><button onClick={() => handleDelete(key)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}