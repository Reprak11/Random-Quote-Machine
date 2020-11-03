import { createStore } from 'redux';
import {quotes} from "../assets/quotes.json"

const initialState = {
    quotes: quotes,
    posi: 0,
    twitterLink: ""
}
const NEXT = "NEXT"

const quoteReducer = (state = initialState, action) => {
    
    switch (action.type){
        case NEXT:
            console.log(state.posi)
            return {...state, posi: (Math.floor(Math.random()*10))}
        default:
            return state
    }
}

const NextRandomQuote = () =>
{
    return {type: NEXT}
}

export default createStore(quoteReducer);
