export const addAccount = (account) => {
    account.id = Math.random().toString();
    return {
        type: "ADD_ACCOUNT",
        payload: account
    }
}

export const editAccount = (id, account) => {
    return {
        type: "EDIT_ACCOUNT",
        id,
        account
    }
};

export const deleteAccount = (account_id) => {
    return {
        type: "DELETE_ACCOUNT",
        account_id
    }
}

