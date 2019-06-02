export function appendMessage(m, list){
    var ar = list ? list : []
    ar.push(m)
    return ar;
}