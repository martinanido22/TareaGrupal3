const url = "https://images-api.nasa.gov/search?q="
const BUTTON = document.getElementById("btnBuscar")

async function getSearchData(url) {
    try {
        let response = await fetch(url);
        let jsonData = await response.json()
        console.log(jsonData)
        showImage(jsonData)
    } catch (error) {
        console.error(error);
    }
}

function showImage(jsonData) {
    const {
        collection: { items },
    } = jsonData
    for (const item of items) {
        if (item.links) {
            const {
                data: [{ title, description, date_created }],
                links: [{ href }]
            } = item;
            console.log(`${title} - ${description} - ${date_created} - ${href}`);
            
        }
    }
}

BUTTON.addEventListener("click", () => {
    let search = url + document.getElementById("inputBuscar").value
    console.log(search)
    getSearchData(search)
})

