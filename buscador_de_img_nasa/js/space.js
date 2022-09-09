const url = "https://images-api.nasa.gov/search?q="
const BUTTON = document.getElementById("btnBuscar")

let currentImageArray = []

async function getSearchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json()
        console.log(data)
        currentImageArray = data.collection.items;
        console.log(currentImageArray)
    } catch (error) {
        console.error(error);
    }
}


BUTTON.addEventListener("click", () => {
    let search = url + document.getElementById("inputBuscar").value
    console.log(search)
    getSearchData(search)
})
