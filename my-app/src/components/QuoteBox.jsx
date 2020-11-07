import React from 'react'
import PhraseComponent from "./PhraseComponent"
import AuthorComponent from "./AuthorComponent"
import TwitterButton from "./TwitterButton"
import NextQuote from "./NextQuote"

const QuoteBox = (props) => (
    <div className="quoteBox">
        <PhraseComponent />
        <AuthorComponent />
        <div className="buttonsPlacement">
            <TwitterButton />
            <NextQuote />
        </div> 
    </div>
)

export default QuoteBox