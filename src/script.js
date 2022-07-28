async function getNasaImageData(date) {
    let dateQuery;
    if (date) {
        dateQuery = `&date=${date}`;
    } else {
        dateQuery = "";
    }
    const API_KEY = "bNOERaLKgs5hRGbEuvLYSBIoNzejhhhLf03RZAAe";
    let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${dateQuery}`
    const returnedData = await fetch(url, {cors: true});
    const jsonData = await returnedData.json();
    console.log(jsonData)
    loadDataToDOM(jsonData)
    console.log("DONE")
}

function loadDataToDOM(data) {
    document.getElementById("title").textContent = data.title;
    document.getElementById("mainImg").src = data.url;
    document.getElementById("description").textContent = data.explanation;
    document.getElementById("copyright").textContent = data.copyright;
}

getNasaImageData()