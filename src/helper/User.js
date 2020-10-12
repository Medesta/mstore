
class User {
    constructor() {
        this._token = ''
    }

    setToken(token) {
        console.warn('Set Token ', token)
        this._token = token
    }
    getToken() {
        if (this._token) {
            console.warn('Get Token ', this._token)
            return this._token
        }
    }

}

export default User = new User