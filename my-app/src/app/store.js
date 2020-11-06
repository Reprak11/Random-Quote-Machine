import { createStore } from 'redux';
import { quotes, colors } from "../assets/quotes.json"

const initialState = {
    quotes: quotes,
    posi: 0,
    twitterLink: "",
    colors: colors,
    inde: 0
}
const NEXT = "NEXT"

const quoteReducer = (state = initialState, action) => {
    
    switch (action.type){
        case NEXT:
            return {...state, posi: (Math.floor(Math.random()*10)), inde: (Math.floor(Math.random()*5))}
        default:
            return state
    }
}

const NextRandomQuote = () =>
{
    return {type: NEXT}
}

export default createStore(quoteReducer);
