import axios from "axios"
import { axiosWithAuth } from '../utils'


const BASE_URL = 'http://localhost:5000'

export const getFriends = () => { 
    axiosWithAuth()
    .get(`${BASE_URL}/api/friends`)
    .then((response) => { 
        console.log(response.data)
    })
    .catch((error) => { 
        console.log("There was an error finding your friends :{", error)
    })
}

export const postNewFriend = (friend) => { 
    axios.post(`${BASE_URL}/api/friends`, friend)
    .then((response) => { 
        console.log(response.data)
        getFriends()
    })
    .catch((error) => { 
        console.log("There was an error creating your new friend :{", error)
    })
}

export const login = (user) => { 
    
    axios.post(`${BASE_URL}/api/login`, user)
    .then((response) => { 
        console.log("MY LOGIN RESPONSE", response.data)
    })
    .catch((error) => { 
        console.log("There was an error loggin you in :{", error)
    })
}