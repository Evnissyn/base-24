import {connect} from 'react-redux'
import calcDisplay from './calcDisplay'
import {reset} from './action-creators'

const mapStateToProps = ({arrayLotis}) => ({arrayLotis})

const mapDispatchToProps = (dispatch) => ({
	resetCalculator () {
		dispatch(reset());
	}
})

export default connect(mapStateToProps,mapDispatchToProps) (calcDisplay);
