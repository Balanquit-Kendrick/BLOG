export const checkToken = () => {
    return localStorage.getItem('token');
}

export const destroyToken = () => {
    localStorage.removeItem('token');
    return true
}