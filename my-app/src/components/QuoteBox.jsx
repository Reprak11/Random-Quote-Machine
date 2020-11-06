import React from 'react'
import PhraseComponent from "./PhraseComponent"
import AuthorComponent from "./AuthorComponent"
import TwitterButton from "./TwitterButton"
import NextQuote from "./NextQuote"

const QuoteBox = (props) => (
    <div className={props.className}>
        <PhraseComponent className={props.className.phraseText}/>
        <AuthorComponent />
        <div>
            <TwitterButton />
            <NextQuote />
        </div> 
    </div>
)

export default QuoteBox