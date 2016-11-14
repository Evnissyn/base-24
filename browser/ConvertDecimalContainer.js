import {connect} from 'react-redux';
import ConvertDecimal from './ConvertDecimal';
import {reset} from './action-creators'

import {userChoseDecimal} from './action-creators'
const mapStateToProps = ({selectedLotis, arrayLotis, decValue}) => ({selectedLotis, arrayLotis, decValue});
const mapDispatchToProps = (dispatch) => ({
	digitClicked (value) {
		console.log("user clicked digit: ",value)
		dispatch(userChoseDecimal(value))
	},
	resetConverter () {
		dispatch(reset());
	}
})

export default connect (mapStateToProps, mapDispatchToProps)(ConvertDecimal);