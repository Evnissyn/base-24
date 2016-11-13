// ACTION TYPES

export const USER_CHOSE_SYMBOL = "USER_CHOSE_SYMBOL";
export const RESET = "RESET";

// ACTION CREATORS

export const userChoseSymbol = (selectedSymbol) => ({
	type: USER_CHOSE_SYMBOL,
	selectedSymbol
})

export const reset = () => ({
	type: RESET
})

//ACTION DISPATCHERS

