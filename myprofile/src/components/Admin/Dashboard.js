import React from 'react';
import '../../switcher.scss';
import  users from '../../Services/Users/users.json'
const Dashboard = () => {
    return (
        <React.Fragment>
            <div className='content-box'>
                <h3 className="p-3 text-center">React - Display a list of items</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> </React.Fragment>
    )
};
export default Dashboard;