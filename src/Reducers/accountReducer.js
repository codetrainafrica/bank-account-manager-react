const initialState = {
    accounts: [],
};


const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ACCOUNT":
            
            return{ ...state, accounts: [...state.accounts, action.payload]};

        case "EDIT_ACCOUNT":
            const newAccounts = state.accounts.map((account) => 
            account.id === action.payload.id ? action.payload : account
            )
            
            return{ ...state, accounts: newAccounts};
    
        default:
            return state;
    }
}

export default accountReducer;
