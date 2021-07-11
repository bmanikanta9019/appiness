import React, { useState } from 'react';

function MyForm() {
    const [name, setName] = useState('');

    const myData = () => {
        console.log("name is", name)
    }
    return (
        <div>
            <label>Name</label>
            <input type="text" onChange={e => setName(e.target.value)} />
            <button type='submit' onClick={() => myData()}>Submit</button>
        </div>
    );
}

export default MyForm
