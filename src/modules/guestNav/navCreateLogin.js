let createLoginButton = () => {
    const loginButton = document.createElement('a');
    loginButton.setAttribute('class','btn btn-white');
    loginButton.setAttribute('type','button');
    loginButton.setAttribute('href','#');
    loginButton.textContent = 'Login';
    return loginButton
}
export {createLoginButton}