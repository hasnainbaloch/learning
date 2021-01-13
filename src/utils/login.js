const login = function (name, password) {
    if (name && password) {
        const userInfo = { name, password };
        localStorage.setItem('isLogin', JSON.stringify(userInfo));
        return true;
    } else {
        localStorage.clear();
        return false
    };
};

export default login;