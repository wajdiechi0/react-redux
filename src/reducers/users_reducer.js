export default function (state={},action) {
    switch (action.type) {
        case 'getUsers': return {...state,userList:action.payload}
        default: return  state;
    }
}
