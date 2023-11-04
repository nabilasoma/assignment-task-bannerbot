window.onload = () => {
    main()
}


function main(){
    const changeBg = document.getElementById('changeBg');
    const colorChange = document.getElementById('colorChange');
    const inputType = document.getElementById('inputType');

    colorChange.addEventListener('click', function(){
        const randomColor = rgbColorGenerator();
        changeBg.style.backgroundColor = randomColor;
        inputType.value = randomColor;
    })

}

function rgbColorGenerator(){
    const red = Math.floor(Math.random() * 225);
    const green = Math.floor(Math.random() * 225);
    const blue = Math.floor(Math.random() * 225);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

