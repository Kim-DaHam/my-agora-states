const API_BASE_URL = 'http://localhost:4000'

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if(request) {
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options)
    .then((response)=>
        response.json().then((json)=>{
            if(!response.ok){
                return Promise.reject(json);
            }
            return json;
        })
    )
    .catch((error)=> {
        //console.log(error.status);
        if(error.status === 403) {
            //window.location.href = "/login";
        }
        return Promise.reject(error);
    });
}