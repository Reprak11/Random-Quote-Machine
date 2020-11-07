import React from 'react'
import { connect } from 'react-redux'

const AuthorComponent = ({quotes,posi}) => (
<p className="authorText">- {quotes[posi].author}</p>
)

const mapStateToProps = state => ({
    quotes: state.quotes,
    posi: state.posi
})

export default connect(mapStateToProps,{})(AuthorComponent)