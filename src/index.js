import fetch from 'node-fetch';

export default class EdgeDB {

    constructor(API_KEY, DB_URL) {
        this.API_KEY = API_KEY;
        this.DB_URL = DB_URL;
    }

    async find(options){

        const path = '/find';
        const url = this.DB_URL + path;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.API_KEY
            },
            body: JSON.stringify(options)
        })

        return await response.json();

    }

    async findOne(id){

        const path = '/findOne';
        const url = this.DB_URL + path;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.API_KEY
            },
            body: JSON.stringify({
                id: id
            })
        })

        return await response.json();

    }


}
