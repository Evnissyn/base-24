import {combineReducers} from 'redux';

function selectedLotis (state = -1, action) {
	switch(action.type) {
		case 'USER_CHOSE_SYMBOL': return action.selectedSymbol;
		case 'RESET': return -1;
		default: return state;
	}
}

function arrayLotis (state = [], action) {
	switch(action.type) {
		case 'USER_CHOSE_SYMBOL': return state.concat([action.selectedSymbol]);
		case 'RESET': return [];
		default: return state;
	}
}

export default combineReducers({
	selectedLotis,
	arrayLotis
})