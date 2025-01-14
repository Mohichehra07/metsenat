import axios from 'axios'

const access = window.localStorage.getItem('access')

const client = axios.create({
    baseURL: 'https://metsenatclub.xn--h28h.uz/api/v1/',
    headers: { Authorization: `${access}` }
})

export default client