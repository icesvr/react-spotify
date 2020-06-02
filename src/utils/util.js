


export const HttpHeadersConfig = (method,token) =>{

    const headerConfig = {
        method,
        headers: new Headers({
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }),
        mode: 'cors',
        cache: 'default'
    }

    return headerConfig;
}


