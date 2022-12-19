import { Outlet, Navigate } from "react-router-dom";

import JWTService from "../../Services/JWTService";

export default function AuthRouter()
{
    function isTokenValid()
    {
        let decodedToken = JWTService.getDecodedToken();
        if (decodedToken == undefined) return false;

        let timeInSeconds = new Date().getTime() / 1000;
        if (decodedToken.exp < Math.round(timeInSeconds))
        {    
            JWTService.clearToken(); // Remove token from localStorage if expired
            return false;
        }
        
        else {return true};
    }

    return (
        isTokenValid() ? <Outlet /> : <Navigate to="/" />
    );
}