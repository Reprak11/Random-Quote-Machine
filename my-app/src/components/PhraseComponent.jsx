import React from 'react'
import { connect } from 'react-redux'

const PhraseComponent = ({quotes, posi}) => (
<h2>{quotes[posi].phrase}</h2>
)

const mapStateToProps = state =>(
    {
        quotes: state.quotes,
        posi: state.posi
    }
)

export default connect(mapStateToProps,{})(PhraseComponent)