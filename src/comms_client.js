import { encodeBody } from "./functions/urlEncodeBody";

export async function commsClient(path, method = 'GET', args = null){
    var BaseUrl = 'http://lavorochat.azurewebsites.net';
    var url = `${BaseUrl}/${path}`

    if(method === 'GET'){
        console.log('fetching with the following url ', url)
        var data = await fetch(url).then(response =>{
            return response.json();
        })
        return data;
    }
    else if(method === 'POST'){
        const headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"})
        var body = encodeBody(args);
        var gotFromPost = await fetch(url,{method: 'POST', headers:headers, body: body}).then(response =>{
            return response.text();
        }).then(json => {
            return JSON.parse(json);
        })
        return gotFromPost;
    }
}