import{combineReducers} from "redux";
import authReducer from './auth_reducer';
import usersReducer from './users_reducer';

const rootReducers=combineReducers({
    authReducer,
    usersReducer
});

export default rootReducers;
