import React, { useState } from 'react'

function Matrix() {
    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
    const [data, setData] = useState([]);
    let total = rows * columns;
    const myDivs = () => {
        for (let i = 0; i <= total; i++) {
            setData(...data, i);
        }
    }
    return (
        <div>
            <div>
                <label>Rows</label> <br />
                <input type="number" onChange={(e) => setRows(e.target.value)} /> <br />
                <label>Columns</label> <br />
                <input type="number" onChange={(e) => setColumns(e.target.value)} /> <br /> <br />
                <button onClick={() => myDivs()}>Show Matrix</button>
                <br /> <br />

                {data.length > 0 && data.map(e =>
                    <div key={e} style={{height:'50px',width:'50px',backgroundColor:'blue'}}>
                        {e}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Matrix;
