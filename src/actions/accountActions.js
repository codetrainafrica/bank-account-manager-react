export const addAccount = (account) => {
    return {
        type: "ADD_ACCOUNT",
        payload: account
    }
}

export const editAccount = (updateAccount) => {
    return {
        type: "EDIT_ACCOUNT",
        payload: updateAccount
    }
}

