
export const depositMoney = (amount) => {
    return async (dispatch) => {
        await console.log('from action')
        await dispatch({
            type: "deposit",
            payload: amount
        });
    }
}


export const withdrawMoney = (amount) => {
    console.log(amount, "Lol")
    return async (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}