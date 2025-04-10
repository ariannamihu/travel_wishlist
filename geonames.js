const pexelsApiKey = "JMXTsU7ypc7hOg1U3PPTiwrhJz8eHazFoh0JTKxXOrrmJIWuLCDzEaek"; 

async function fetchDestination(cityName) {
    const username = "ariannamihu";
    const url = `https://api.geonames.org/searchJSON?q=${cityName}&maxRows=1&username=${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log(data);

        if (data.geonames.length > 0) {
            const place = data.geonames[0];
            displayDestination(place);

            fetchCityImage(place.name);
        } else {
            console.log("No results found.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function fetchCityImage(cityName) {
    const url = `https://api.pexels.com/v1/search?query=${cityName}&per_page=1`;

    try {
        const response = await fetch(url, {
            headers: { Authorization: pexelsApiKey }
        });

        const data = await response.json();
        console.log(data);

        if (data.photos.length > 0) {
            const imgUrl = data.photos[0].src.medium;
            
            document.getElementById("results").innerHTML += `
                <img src="${imgUrl}" alt="${cityName}" style="width:100%; max-width:600px; margin-top:10px;">
            `;
        } else {
            console.log("No images found for", cityName);
        }
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}

function displayDestination(place) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>${place.name}, ${place.countryName}</h2>
        <p><strong>Latitude:</strong> ${place.lat}, <strong>Longitude:</strong> ${place.lng}</p>
        <p><strong>Population:</strong> ${place.population.toLocaleString()}</p>
        <button class="btn btn-primary" onclick="addToWishlist('${place.name}')">Add to Wishlist</button>
    `;
}
