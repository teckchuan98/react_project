import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees:[]
        }
    }

    componentDidMount(){
        EmployeeService.getTodo().then((res) => {
            this.setState({employees:res.data});
        })
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className= "row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Company Id</th>
                                <th>Company Name</th>
                                <th>Employee Email Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key= {employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.id}</td>
                                        <td>{employee.id}</td>
                                        <td>{employee.id}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;