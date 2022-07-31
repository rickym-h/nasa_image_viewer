import "./style.css"

async function getNasaImageData(date) {
    try{
        let dateQuery;
        if (date) {
            dateQuery = `&date=${date}`;
        } else {
            dateQuery = "";
        }
        const API_KEY = "bNOERaLKgs5hRGbEuvLYSBIoNzejhhhLf03RZAAe";
        let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${dateQuery}`
        const returnedData = await fetch(url, {cors: true});
        console.log(returnedData)
        const jsonData = await returnedData.json();
        console.log(jsonData)
        loadDataToDOM(jsonData)
        console.log("DONE")
    } catch (error) {
        console.log(error)
    }

}

function loadDataToDOM(data) {
    document.getElementById("title").textContent = data.title;
    document.getElementById("mainImg").src = data.url;
    document.getElementById("description").textContent = data.explanation;
    document.getElementById("copyright").textContent = data.copyright;
}

getNasaImageData()
