import axios from "axios"


import { axiosWithAuth } from '../utils'


export const BASE_URL = 'http://localhost:5000'


    

export const postNewFriend = (friend) => { 
    axios.post(`${BASE_URL}/api/friends`, friend)
    .then((response) => { 
        console.log(response.data)
        
    })
    .catch((error) => { 
        console.log("There was an error creating your new friend :{", error)
    })
}

