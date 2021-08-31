import { ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT } from '../Actions/AccountsActions';

const initialState = {
    accounts : [
        {
            account_name: "John",
            account_number: "23456789",
            account_type: "savings",
            bank_name: "Code Digital Bank",
            bank_branch: "Accra",
            id: "ertyuieof"
        }
    ]
}


const AccountsReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_ACCOUNT:
         return  {...state.accounts, accounts: [...state.accounts, action.payload] };

         case DELETE_ACCOUNT:
             const SavedAccounts = state.accounts.filter((account) => {
                return account.id !== action.payload;
              });
              return {...state, accounts: SavedAccounts  }
        
        case EDIT_ACCOUNT:
            return {...state, accounts: state.accounts.map((account) =>
                account.id === action.payload.id ? action.payload : account
              )}

        default:
            return state;
    }
};

export default AccountsReducer;