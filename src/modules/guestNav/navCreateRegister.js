let createRegisterButton = () => {
    const registerButton = document.createElement('a');
    registerButton.setAttribute('class','btn btn-white');
    registerButton.setAttribute('type','button');
    registerButton.setAttribute('href','#');
    registerButton.textContent = 'Register';
    return registerButton
}
export {createRegisterButton}