import { createStore } from "redux";
import AccountsReducer from '../Reducer/AccountsReducer';

const store = createStore(AccountsReducer)

export default store;