import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from "react-transition-group";


const PhraseComponent = ({quotes, posi}) => (
    <TransitionGroup>
        <CSSTransition key={quotes[posi].phrase}  timeout={700} classNames="fade">
            <h2  className="phraseText">"{quotes[posi].phrase}"</h2>
        </CSSTransition>
    </TransitionGroup>
    
    
)

const mapStateToProps = state =>(
    {
        quotes: state.quotes,
        posi: state.posi
    }
)

export default connect(mapStateToProps,{})(PhraseComponent)