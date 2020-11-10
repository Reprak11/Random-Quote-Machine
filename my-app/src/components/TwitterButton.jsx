import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { connect } from 'react-redux' 

const TwitterButton = ({quote,posi}) => {
    return (<a className="buttonStyle" href={`https://twitter.com/intent/tweet?text="${quote[posi].phrase}"%20-${quote[posi].author}`}><FontAwesomeIcon icon={ faTwitter } /></a>)
}
const mapStateToProps = state => ({
    quote: state.quotes,
    posi: state.posi
})
export default connect(mapStateToProps,null) (TwitterButton)