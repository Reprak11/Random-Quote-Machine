import React from 'react'
import PhraseComponent from "./PhraseComponent"
import AuthorComponent from "./AuthorComponent"
import TwitterButton from "./TwitterButton"
import NextQuote from "./NextQuote"

const QuoteBox = (props) => (
    <div>
        <PhraseComponent />
        <AuthorComponent />
        <TwitterButton />
        <NextQuote />
    </div>
)

export default QuoteBox