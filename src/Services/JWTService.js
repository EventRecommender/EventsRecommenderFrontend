import jwt_decode from 'jwt-decode';

class JWTService
{
    GetToken()
    {
        let token = localStorage.getItem('token');
        if (token === null) { return; }

        return token;
    }

    GetDecodedToken()
    {
        let token = localStorage.getItem('token');
        if (token === null) { return; }

        return jwt_decode(token);
    }

    SetToken(newToken)
    {
        return localStorage.setItem("token", JSON.stringify(newToken));
    }

    DeleteToken()
    {
        return localStorage.removeItem('token')
    }
}

export default new JWTService();