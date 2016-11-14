// ACTION TYPES

export const USER_CHOSE_SYMBOL = "USER_CHOSE_SYMBOL";
export const RESET = "RESET";
export const USER_CHOSE_DECIMAL = "USER_CHOSE_DECIMAL"

// ACTION CREATORS

export const userChoseSymbol = (selectedSymbol) => ({
	type: USER_CHOSE_SYMBOL,
	selectedSymbol
})

export const reset = () => ({
	type: RESET
})

export const userChoseDecimal = (value) => ({
	type:USER_CHOSE_DECIMAL,
	value
})

//ACTION DISPATCHERS

