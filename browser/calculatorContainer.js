import {connect} from 'react-redux';
import calculator from './calculator';

import {userChoseSymbol} from './action-creators'
const mapStateToProps = ({selectedLotis, arrayLotis}) => ({selectedLotis, arrayLotis});
const mapDispatchToProps = (dispatch) => ({
	symbolClicked (symbol) {
		console.log("user clicked symbol: ",symbol)
		dispatch(userChoseSymbol(symbol))
	}
})

export default connect (mapStateToProps, mapDispatchToProps)(calculator);