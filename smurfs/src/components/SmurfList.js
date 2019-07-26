import React from 'react'

import {getSmurfs} from '../actions'
import {connect} from 'react-redux'
import Smurf from './Smurf'

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.name} smurf={smurf} />
            ))}
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//       smurfs: state.smurfs,
//       error: state.error,
//       fetching: state.fetching
//     }
//   }

//   export default connect(
//       mapStateToProps,
//       { getSmurfs }
//   )(SmurfList)

export default SmurfList
