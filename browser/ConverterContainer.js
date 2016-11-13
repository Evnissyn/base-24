import {connect} from 'react-redux';
import Converter from './Converter';
import {reset} from './action-creators'

import {userChoseSymbol} from './action-creators'
const mapStateToProps = ({selectedLotis, arrayLotis}) => ({selectedLotis, arrayLotis});
const mapDispatchToProps = (dispatch) => ({
	symbolClicked (symbol) {
		console.log("user clicked symbol: ",symbol)
		dispatch(userChoseSymbol(symbol))
	},
	resetConverter () {
		dispatch(reset());
	}
})

export default connect (mapStateToProps, mapDispatchToProps)(Converter);