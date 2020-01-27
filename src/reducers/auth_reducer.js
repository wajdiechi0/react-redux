export default function (state={},action) {
    switch (action.type) {
        case 'auth': return {...state,authResult:action.payload}
        default: return state;
    }
}
