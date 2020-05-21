import api from './Api'
import baseURL from './Http'


export const getEmployees = async () => {
    try {
        const res = await api.get(`${baseURL}/api/employees`)
        return res.data
    } catch (error) {
        return (error.message.err)
    }
}

export const postEmployee = async (employee) => {
    try {
        await api.post(`${baseURL}/api/employee`, employee)
        //  console.log(employee)
    } catch (error) {
        console.log(error.message.err)
    }
}

export const getEmployee = async (_id) => {
    try {
        const res = await api.get(`${baseURL}/api/employee/${_id}`)
        console.log(res.data)
        return (res.data)
    } catch (error) {

    }
}