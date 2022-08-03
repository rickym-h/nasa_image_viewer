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
    } catch (error) {
        console.log(error)
    }

}

function loadDataToDOM(data) {
    console.log("url: " + data.url);
    console.log("hdurl: " + data.hdurl);
    document.getElementById("title").textContent = data.title;
    document.getElementById("mainImg").src = data.url;
    document.getElementById("description").textContent = data.explanation;
    document.getElementById("copyright").textContent = "Copyright: " + data.copyright;

    // load modal image
    let modal = document.getElementById("myModal");
    let mainImg = document.getElementById("mainImg");
    let modalImg = document.getElementById("modalImg");
    document.getElementById("modalImg").src = data.hdurl;
    mainImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = data.hdurl;
        document.getElementById("caption").textContent = data.title;
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

}

getNasaImageData()

