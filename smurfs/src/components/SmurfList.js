import React from 'react'
import Smurf from './Smurf'

const SmurfList = props => {
    console.log(props, "Log props in SmurfList")
    return (
        <>
            {props.smurfs.map(smurf => { console.log(smurf, "JFJJFJF")
                return <Smurf key={Math.random} smurf={smurf[0]} />
            })}
        </>
    )
}

export default SmurfList