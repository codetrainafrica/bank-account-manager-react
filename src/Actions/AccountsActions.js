export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const EDIT_ACCOUNT = "EDIT_ACCOUNT";


export const addAccount =(account)=>{
    account.id =Math.random().toString();
    return{
        type: ADD_ACCOUNT,
        payload: account
    }
};

export const deleteAccount= (accountId)=>{
    return {
        type: DELETE_ACCOUNT,
        payload: accountId,
    }
};

export const editAccount= (id, account)=>{
    return {
        type: EDIT_ACCOUNT,
        id,
        // payload: 
         account,
    }
};