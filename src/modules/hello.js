const hello =()=>{
    let h1 = document.createElement('h1');
    h1.textContent = 'Kas cia vyksta';
    document.querySelector('body').appendChild(h1);
}

export default hello