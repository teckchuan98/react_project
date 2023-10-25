import axios from 'axios';

class EmployeeService  {
    getTodo(){
        return axios.get("http://localhost:8080/getAllCompanies");
    }
}

export default new EmployeeService()