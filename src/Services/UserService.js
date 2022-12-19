class UserService
{
    storeUser(user)
    {
        let userObj = { 'area': user.area, 'id': user.id, 'role': user.role, 'username': user.username }
        return localStorage.setItem("userData", JSON.stringify(userObj));
    }

    getArea()
    {
        let user = JSON.parse(localStorage.getItem('userData'));
        if (user === null) { return; }

        return user.area;
    }

    getID()
    {
        let user = JSON.parse(localStorage.getItem('userData'));
        if (user === null) { return; }

        return user.id;
    }

    getRole()
    {
        let user = JSON.parse(localStorage.getItem('userData'));
        if (user === null) { return; }

        return user.role;
    }

    getUsername()
    {
        let user = JSON.parse(localStorage.getItem('userData'));
        if (user === null) { return; }

        return user.username;
    }
}

export default new UserService();