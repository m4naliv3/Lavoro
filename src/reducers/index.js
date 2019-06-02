const initialState = {}

export default function Custom_Reducer(state = initialState, action) {
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