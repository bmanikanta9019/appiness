import React, { useState } from 'react';
import employeeList from '../dashboardData';

function Dashboard() {
    let data = employeeList();
    const [empList, setEmplist] = useState(data);
    let h = empList[0];
    const [headers, setHeaders] = useState(Object.keys(h));
    return (
        <div>
            <h3 className="textCenter">Dashboard Page</h3>
            {empList.length > 0 && <table class="table table-striped border">
                <thead>
                    <tr> {headers.map(e=><th scope="col">{e.toUpperCase()}</th>)}</tr>
                </thead>
                <tbody>{empList.map(e => <tr key={e.id}>
                        <th scope="row">{e.id}</th>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.gender}</td>
                        <td>{e.email}</td>
                        <td>{e.phoneNo}</td>
                    </tr>)} </tbody>
            </table>
            }
        </div>
    )
}

export default Dashboard;