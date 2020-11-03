import React from 'react'
import { connect } from 'react-redux'

const NextQuote = ({nextQuote}) => (
    <button onClick={nextQuote}>Next Quote</button>
)

const mapDispatchToProps = dispatch => (
    {
        nextQuote: () => {dispatch({type:'NEXT'})}
    }
)

export default connect(null,mapDispatchToProps)(NextQuote)