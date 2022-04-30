// var EdgeDB = require('./lib/edgedb');
// exports.EdgeDB = () => {
//     return 'HELLO WORLD';
// }

export default class EdgeDB {

    constructor(message) {
        this.message = message
    }

    getMessage(){
        return `Hello world!! ${this.message}`
    }
}
