export const Api = {

    baseUrl: 'https://pneustoreapi.azurewebsites.net/Product',


    
    readAllUrl: () => Api.baseUrl + '/',


    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            
        })
    }
}