import {createStore} from 'redux';
import accountsReducer from '../Reducers/accountsReducer';

export const store = createStore( accountsReducer )
