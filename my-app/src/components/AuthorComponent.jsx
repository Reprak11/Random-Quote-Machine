import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AuthorComponent = ({quotes,posi}) => (
<TransitionGroup>
    <CSSTransition key={quotes[posi].author}  timeout={700} classNames="fade">
        <p className="authorText">- {quotes[posi].author}</p>
    </CSSTransition>
</TransitionGroup>

)

const mapStateToProps = state => ({
    quotes: state.quotes,
    posi: state.posi
})

export default connect(mapStateToProps,{})(AuthorComponent)