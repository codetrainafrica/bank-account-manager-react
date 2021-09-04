const initialState = {
    accounts:[
        {
            account_type:'hadshvdashk',
            account_name:'shbvdjhvb',
            account_number:543456789,
            bank_name:'jdsbjbdjs',
            bank_branch:'bjsbjbds',
            id: 1
        },
    ]
};

const accountsReducer = (state = initialState ,action) => { 
    switch(action.type){
     case"ADD_ACCOUNT":
     return {...state.accounts,accounts:[...state.accounts,action.payload]};
     case"DELETE_ACCOUNT":
     let updatedAccount = state.accounts.filter(account=>account.id !== action.payload)
     return {accounts:updatedAccount}
     case "EDIT_ACCOUNT":
     let editedAccount = state.accounts.map(account => account.id == action.payload.id ? action.payload : account)    
     console.log(action.payload);
     return {accounts:editedAccount}   
     default:return state
    }
}

export default accountsReducer;