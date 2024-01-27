const getColor = () => {
    //Generate random number and convert it into hex number
    //math.random gives random number, math.floor coverts the decimal number which is given to the nearest integer

    const randomNumber = Math.floor(Math.random() * 16777215);

    //converts the random hex number into the hex code by taking it as a string od specific  given unit and concatenating with #

    const randomCode = "#" + randomNumber.toString(16);

    //On clicking button the color  of background changes according to color code
    document.body.style.backgroundColor = randomCode;

    //On clicking button the text/code of color changes respectively
    document.getElementById("color-code").innerText = randomCode;

    //copy the Hex code automatically when clicking button 
    navigator.clipboard.writeText(randomCode);
}


    //event call (colors change when button clicking event occurs)
    document.getElementById("btn").addEventListener(
    "click",
    getColor
    )


    //initial call (colors can be changing in start)
    getColor();