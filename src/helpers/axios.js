import axios from 'axios'


const url = axios.create({
    baseURL: 'http://localhost:3001/api/'
})


export default url;