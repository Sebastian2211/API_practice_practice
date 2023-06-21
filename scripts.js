const h1Element = document.querySelector(".quote");
const h2Element = document.querySelector(".author");

const getQuote = async () => {
    const responseFromAPI = await fetch('https://type.fit/api/quotes');
    const data = await responseFromAPI.json();

    return data;
}




function newQuote() {
    getQuote().then(
        (result) => {
            console.log(result);

            const randomNumber = Math.floor(Math.random() * 1643);
            console.log('Random Number: ', randomNumber);
            console.log(result[randomNumber]);

            console.log("Your quote is " + result[randomNumber].text);
            console.log("Said by " + result[randomNumber].author);

            h1Element.textContent = result[randomNumber].text;
            if (result[randomNumber].author === null) {
                console.log("none");
                h2Element.textContent = "There was no author so I had to put something here";
            } else {
                console.log(result[randomNumber].author)
                h2Element.textContent = result[randomNumber].author;
            }

            hideHeader();
        }

    )
}

function hideHeader() {
    document.getElementById("header").style.display = "none";
}