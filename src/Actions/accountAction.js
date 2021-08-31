export const addAccount = (newAccount) =>{
    newAccount.id = Math.random().toString();
    return{
        type: "ADD_ACCOUNT",
        payload: newAccount,
    }
}
export const deleteAccount = (accountId) =>{
   
    return{
        type: "DELETE_ACCOUNT",
        payload: accountId,
    }
}

export const editAccount = (updatedAccount) =>{
   
    return{
        type: "EDIT_ACCOUNT",
        payload: updatedAccount,
    }
}