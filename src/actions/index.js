import axios from'axios';

export function checkUserAuth(user,password){
    return{
        type:'auth',
        payload: ((user === 'admin') && (password === 'admin'))
    }
}


export function getUsersDetails(){
    let users=axios.get('https://jsonplaceholder.typicode.com/users').then(response=>response.data);
    return{
        type:'getUsers',
        payload: users
    }
}
