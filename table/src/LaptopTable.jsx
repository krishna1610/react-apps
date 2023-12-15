import React from 'react';

const LaptopTable = () => {
    return (
        <div>
            <table className='laptop-table-div'>
                <thead>
                    <th>Name</th>
                    <th>password</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Modified Date</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Krishna</td>
                        <td>kkk</td>
                        <td>Active</td>
                        <td>10/10/2023</td>
                        <td>10/20/2023</td>
                    </tr>
                     <tr>
                        <td>Aparna</td>
                        <td>ap</td>
                        <td>Active</td>
                        <td>10/30/2023</td>
                        <td>11/20/2023</td>
                    </tr>
                     <tr>
                        <td>Krishna</td>
                        <td>kkk</td>
                        <td>Active</td>
                        <td>10/10/2023</td>
                        <td>10/20/2023</td>
                    </tr>
                     <tr>
                        <td>Krishna</td>
                        <td>kkk</td>
                        <td>Active</td>
                        <td>10/10/2023</td>
                        <td>10/20/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default LaptopTable;