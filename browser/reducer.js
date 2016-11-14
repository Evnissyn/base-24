import {combineReducers} from 'redux';
import Lotis from './lotisClass'

let tempLotis = new Lotis(0);

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
		case 'USER_CHOSE_DECIMAL':
			tempLotis.setDecimalValue(action.value)
			return tempLotis.lotis.slice(0);
		case 'RESET': return [];
		default: return state;
	}
}

function decValue (state = 0, action) {
	switch(action.type) {
		case 'USER_CHOSE_SYMBOL': 
			return state * 24 + action.selectedSymbol;
		case 'USER_CHOSE_DECIMAL':
			return action.value;
		case 'RESET': return 0;
		default: return state;
	}
}

export default combineReducers({
	selectedLotis,
	arrayLotis,
	decValue
})