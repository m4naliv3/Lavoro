const initialState = { Account: null, Contacts: null, Messages: null}

export default function Custom_Reducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
    case 'SET_MESSAGES':
        return { ...state, Messages: action.payload } 
    case 'SET_CONTACTS':
        return{ ...state, Contacts: action.payload }
    case 'SET_ACCOUNT':
        return { ...state, Account: action.payload }   
    default:
        return state;
    }
}