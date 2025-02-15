document.addEventListener("DOMContentLoaded", function() {
    const destinations = [
        { name: "Paris, France", description: "The city of love and lights." },
        { name: "Kyoto, Japan", description: "Beautiful temples and cherry blossoms." },
        { name: "New York, USA", description: "The city that never sleeps." }
    ];
    
    const destinationContainer = document.getElementById("destinations");
    const wishlistContainer = document.getElementById("wishlist");
    
    destinations.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${dest.name}</h5>
                    <p class="card-text">${dest.description}</p>
                    <button class="btn btn-primary" onclick="addToWishlist('${dest.name}')">Add to Wishlist</button>
                </div>
            </div>
        `;
        destinationContainer.appendChild(card);
    });
    
    window.addToWishlist = function(destinationName) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = destinationName;
        wishlistContainer.appendChild(listItem);
    };
});
   