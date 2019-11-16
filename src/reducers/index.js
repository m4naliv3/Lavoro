const initialState = { Account: null, Contacts: null, Messages: null, ConversationID: null, ContactPhone: null, AccountPhone: null}

export default function Custom_Reducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
    case 'SET_MESSAGES':
        return { ...state, Messages: action.payload } 
    case 'SET_CONTACTS':
        return{ ...state, Contacts: action.payload }
    case 'SET_ACCOUNT':
        return { ...state, Account: action.payload }  
    case 'SET_ACCOUNT_PHONE':
        return { ...state, AccountPhone: action.payload }
    case 'SET_OUTBOUND_MESSAGE':
        return { ...state, OutboundMessage: action.payload}
    case 'SET_INBOUND_MESSAGE':
        return { ...state, InboundMessage: action.payload }
    case 'OPEN_CONTACT_MODAL':
        return { ...state, ContactModal: action.payload}
    case 'SET_CONVERSATION':
        return { ...state, ConversationID: action.payload.ID, ContactPhone: action.payload.Phone} 
    case 'OPEN_CREATE_ACCOUNT':
        return {...state, CreateAccount: action.payload}
    case 'LOGIN':
        return {...state, Login: action.payload}
    default:
        return state;
    }
}