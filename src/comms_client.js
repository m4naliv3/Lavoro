import { encodeBody } from "./functions/urlEncodeBody";

export async function commsClient(path, method = 'GET', args = null){
    var BaseUrl = 'https://lavorochatapp.azurewebsites.net/api';
    var url = `${BaseUrl}/${path}`

    if(method === 'GET'){
        var data = await fetch(url, {mode: 'cors',
        headers: {'Access-Control-Allow-Origin':'*'}}).then(response =>{
            return response.json();
        })
        return data;
    }
    else if(method === 'POST'){
        const headers = new Headers({
            'Access-Control-Allow-Origin':'*',
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Request-Method": "POST"
        })
        var body = encodeBody(args);
        var gotFromPost = await fetch(url, {
            mode: 'cors',
            method: 'POST', 
            headers:headers, 
            body: body
        }).then(response =>{
            return response.text();
        }).then(json => {
            return JSON.parse(json);
        })
        return gotFromPost;
    }
}