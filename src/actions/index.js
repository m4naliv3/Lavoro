export function SetMessages(payload){
    return{
        type: 'SET_MESSAGES', 
        payload: payload
    };
}
export function SetAccount(payload){
    return{
        type: 'SET_ACCOUNT', 
        payload: payload
    };
}
export function SetContacts(payload){
    return{
        type: 'SET_CONTACTS', 
        payload: payload
    };
}