import {combineReducers} from 'redux';
import EisenReducer from './reducer-eisen';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    eisen: EisenReducer,
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers
